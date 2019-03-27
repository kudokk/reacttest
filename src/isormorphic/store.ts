import { History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { rootReducer, RootState } from '../modules';
import { reducer, RootState } from '../modules/reducer'

export const configureStore = (initialCounterState: Partial<RootState>, history: History) => {
    /**
     * applyMiddleware: dispatch関数をラップし、actionがreducerに到達する前にmiddlewareがキャッチできるようにする
     */
    const middleWare = applyMiddleware(routerMiddleware(history));
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
