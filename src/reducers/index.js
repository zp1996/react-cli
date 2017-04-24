import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import items from './items';

export default combineReducers({
    items,
    routing: routerReducer
});
