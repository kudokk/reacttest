import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import { reducer } from './reducer'

export type RootState = {
    router: RouterState,
};

export const rootReducer = combineReducers<RootState>({
    reducer
} as any);

/**
 * response内容
 */
export const initState = (): Partial<RootState> => {
    return { 
     };
};
