import { History } from 'history';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer, RootState } from '../modules/reducer'

export const configureStore = (initialCounterState: Partial<RootState>, history: History) => {
    /**
     * applyMiddleware: dispatch関数をラップし、actionがreducerに到達する前にmiddlewareがキャッチできるようにする
     * redux-thunk: actionで非同期通信を可能にする
     */
    const middleWare = applyMiddleware(thunk, routerMiddleware(history));
    /**
     * response内容
     */
    const store = createStore(
        connectRouter(history)(reducer),
        initialCounterState,
        middleWare
    );
    return {
        store,
        history,
    };
};
