import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './Routes';
import { initialCounterState, RootState } from './modules/reducer';
import { configureStore } from './isormorphic/store';

declare var window: { INITIAL_STATE: Partial<RootState>; };

const initialState: Partial<RootState> = window.INITIAL_STATE || initialCounterState();
delete window.INITIAL_STATE;

const preload = configureStore(
    initialState,
    createBrowserHistory()
);


/**
 * サーバで構築されたDOMと hydrate() APIによってブラウザレンダリングされるDOMとの差分をチェックし、差分がある場合のみコンポーネントの再描画を行う
 */
ReactDOM.hydrate(
    <Provider store={preload.store}>
        <ConnectedRouter history={preload.history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') //componetの親要素
);