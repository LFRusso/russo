import React from 'react';
import Navitem from './Navitem';
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {

    const colapse = () => {
        document.getElementById("sidenav").style.width = "0"; 
        document.getElementById("colapse-btn").style.marginLeft = "0";
    }

    return (
        <div className="sidenav" id="sidenav">

            <div class="navitems">
                <Link to="/" class="text-link" onClick={colapse}><Navitem> Home </Navitem></Link>
                <Link to="/about" class="text-link" onClick={colapse}><Navitem> Sobre </Navitem></Link>
                <Link to="/projects" class="text-link" onClick={colapse}><Navitem> Projetos </Navitem></Link>
                <Link to="/notes" class="text-link" onClick={colapse}><Navitem> Notas </Navitem></Link>
            </div>

            <div className="sidenav-foot">
                <h3>@russo</h3>
            </div>
        </div>
    );
}

export default Navbar;