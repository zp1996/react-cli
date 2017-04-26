import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from 'Components/Header';

const Test = () => {
    return (
        <div>
            <Header />
            <h1>Test Page</h1>
            <Link to="/">Index Page</Link>
        </div>
    );
};

export default Test;
