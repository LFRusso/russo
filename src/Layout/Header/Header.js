import React from 'react'
import './style.css'

const Header = ({children}) => {
    return(
        <div className="page-header">
            <h1>{children}</h1>
        </div>
    );
}

export default Header;