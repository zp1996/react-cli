import React from 'react';

const List = ({ items }) => {
    return (
        <ul className="list">
            {
                items.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
};

export default List;
