import React from 'react';
import './style.css';

const Navitem = ({children}) => {
    return (
        <span className="navitem"> {children} </span>
    );
}

export default Navitem;