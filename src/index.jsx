import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import 'Styles/index.less';
import routes from './routes';
import Test from './helpers/test';

let store = null;
if (process.env.NODE_ENV === 'production') {
    store = require('Stores/prod').default;
} else {
    store = require('Stores/dev').default;
}
const history = syncHistoryWithStore(browserHistory, store);

console.log(new Test());

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('root')
);
