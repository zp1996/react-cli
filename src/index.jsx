import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducer from 'Reducers/index';
import 'Styles/index.less';
import routes from './routes';

const initialState = window.__INITIAL_STATE__,
    store = createStore(reducer, initialState),
    history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('root')
);
