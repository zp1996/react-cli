import { createStore } from 'redux';
import reducer from 'Reducers/index';

const initialState = window.__INITIAL_STATE__,
    store = createStore(reducer, initialState);

export default store;
