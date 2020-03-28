import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaBars } from 'react-icons/fa'
import './style.css';

const Header = () => {
    const [btnColapsed, setBtn] = useState(true);

    const btnClicked = () => {
        if(btnColapsed){
            document.getElementById("sidenav").style.width = "200px";
            document.getElementById("main").style.marginLeft = "200px";
            document.getElementById("colapse-btn").style.marginLeft = "200px";
        } else {
            document.getElementById("sidenav").style.width = "0"; 
            document.getElementById("main").style.marginLeft = "10px";
            document.getElementById("colapse-btn").style.marginLeft = "0";
        }
        setBtn(!btnColapsed);
    }

    return (

        <div className="">

            <button className="btn" id="colapse-btn"  onClick={ btnClicked }>
                <FaBars color="#022B3A" size={30} /> 
            </button>

            <Navbar />
        </div>
    );
}

export default Header;