import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from 'Reducers/index';

const middlewares = [
    logger
];

const enhancer = compose(
    applyMiddleware(...middlewares)
);

function configureStore(reducer, initialState, enhancer) {
    const store = createStore(reducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

const initialState = window.__INITIAL_STATE__,
    store = configureStore(reducer, initialState, enhancer);

export default store;
