import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'Reducers/index';
import rootSaga from 'Sagas/index';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const initialState = typeof __INITIAL_STATE__ === 'undefined' ? {} : __INITIAL_STATE__,
    store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
