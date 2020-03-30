import React from 'react';
import './style.css';
import {MdHome, MdInfo, MdNote} from 'react-icons/md';
import {FaRobot} from 'react-icons/fa';

const Navitem = ({children, icon}) => {
    
    const icons = {
        home: MdHome,
        about: MdInfo,
        projects: FaRobot,
        notes: MdNote
    }

    const Ico = icons[icon];
    

    return (
        <span className="navitem"> <Ico className="nav-icon" color="#efefef" size={18} /> <span className="nav-name">{children}</span> </span>
    );
}

export default Navitem;