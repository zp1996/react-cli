import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'Reducers/index';
import rootSaga from 'Sagas/index';

const enhancer = compose(
    applyMiddleware([
        createSagaMiddleware()
    ])
);

const initialState = window.__INITIAL_STATE__,
    store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
