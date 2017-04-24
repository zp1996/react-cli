import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Components/Header';
import List from 'Components/List';

@connect(
    state => ({
        items: state.items
    })
)
class Index extends Component {
    render() {
        const { items } = this.props;
        return (
            <div>
                <Header />
                <div className="index-container">
                    <List items={items} />
                </div>
            </div>
        );
    }
}

export default Index;
