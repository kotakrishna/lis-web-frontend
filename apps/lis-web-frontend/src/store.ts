import { configureStore, compose, combineReducers } from '@reduxjs/toolkit';
import { createReducerManager } from './reducermanager';

const staticReducers = {
    theme: (state = { theme: 'dark' }, action: any) => {
        switch (action.type) {
            case 'CHANGE_THEME':
                return { ...state, theme: action.payload };
            default:
                return state;
        }
    },
    login: (state = { login: false }, action: any) => {
        switch (action.type) {
            case 'LOGIN':
                return { ...state, login: action.payload };
            default:
                return state;
        }
    },
};

const composeEnhancers =
    (typeof window !== 'undefined' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export function creatingStore() {
    const reducerManager = createReducerManager(staticReducers);

    // Create a store with the root reducer function being the one exposed by the manager.
    let store: any = configureStore({
        reducer: reducerManager.reduce,
        devTools:
            process.env.NODE_ENV !== 'production' ? composeEnhancers : false,
    });

    store.asyncReducers = {};

    store.injectReducer = (key: string, asyncReducer: any) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    function createReducer(asyncReducers: any) {
        return combineReducers({
            ...staticReducers,
            ...asyncReducers,
        });
    }

    // Update the type of injectReducer to match the type of reducerManager
    // store.reducerManager = reducerManager; // Replace 'any' with the correct type

    return store;
}

export { staticReducers };

export default creatingStore;
