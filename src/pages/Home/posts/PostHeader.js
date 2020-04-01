import React from 'react';


const Header = ({ children }) => {

    return (
        <div className="post-header">
            <h1>{children}</h1>
            <hr />
        </div>
    );
}

export default Header;  