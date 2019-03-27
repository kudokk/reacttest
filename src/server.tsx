import * as Express from 'express';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderToString } from 'react-dom/server';
import ReactHelmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import createMemoryHistory from 'history/createMemoryHistory';

import Routes from './Routes';
import { render } from './isormorphic/render';
import { configureStore } from './isormorphic/store';
import { initialCounterState } from './modules/reducer';

const app = Express();

app.use(Express.static(__dirname + '/public'));
/**
 * get通信, 第一引数に正規表現を用いて、対象範囲を定める
 */
app.get(
    '*',
    (req: Express.Request, res: Express.Response) => {
        /*
        * Isomophic: 同じコードをクライアントとサーバで実行
        * https://qiita.com/kyrieleison/items/4ac5bcc331aee6394440
        * 最近はuniverasal javascriptが熱い
        */
        const { store, history } = configureStore(
            initialCounterState(),
            /**
             * createMemoryHistory: ブラウザ履歴の設定
             */
            createMemoryHistory({
                initialEntries: [req.url],
                initialIndex: 0,
            })
        );
        const sheet = new ServerStyleSheet();
        const content = renderToString(
            sheet.collectStyles(
                /**
                 * Provider: ReactのAPIにも存在
                 * Provider配下のコンポーネントに置いて、storeにアクセスできるようになる
                 */
                <Provider store={store}>
                    {/* 
                    * ConnectedRouter: historyに変化が生じたら「LOCATION_CHANGE」アクションをdispatchする
                    */}
                    <ConnectedRouter history={history}>
                        <Routes />
                    </ConnectedRouter>
                </Provider>
            )
        );
        /**
         * react-helmet: <head></head> に入ってるタグを書き換える
         */
        res.write(
            render(content,
                store.getState(),
                ReactHelmet.renderStatic(),
                sheet.getStyleTags()
            )
        );
        res.end();
    });

app.listen(
    3000,
    () => {
        console.log('app listening on port 3000!');
    }
);
