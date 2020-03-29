import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaBars } from 'react-icons/fa'
import './style.css';

const Header = () => {
    const [btnColapsed, setBtn] = useState(true);

    const btnClicked = () => {
        if(btnColapsed){
            document.getElementById("sidenav").style.width = "200px";
            document.getElementById("colapse-btn").style.marginLeft = "200px";
        } else {
            document.getElementById("sidenav").style.width = "0"; 
            document.getElementById("colapse-btn").style.marginLeft = "0";
        }
        setBtn(!btnColapsed);
    }

    return (

        <div className="">
            <Navbar />
            <button className="btn" id="colapse-btn"  onClick={ btnClicked }>
                <FaBars color="#efefef" size={30} /> 
            </button>
        </div>
    );
}

export default Header;