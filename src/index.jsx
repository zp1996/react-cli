import React from 'react';
import { render } from 'react-dom';
import Header from 'Components/Header';
import styles from 'Styles/index';

render(
    <div>
        <Header />
        <h1>Hello react-cli</h1>
    </div>, document.getElementById('root')
);
