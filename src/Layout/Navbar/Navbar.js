import React from 'react';
import Navitem from './Navitem';
import {Link} from 'react-router-dom';
import './style.css';

const Navbar = () => {


    return (
        <div className="sidenav" id="sidenav">
            <div className="sidenav-top">
                <h1>@russo</h1>
            </div>

            <div class="navitems">

                <Link to="/" class="text-link"><Navitem> Home </Navitem></Link>
                <Link to="/about" class="text-link"><Navitem> Sobre </Navitem></Link>
                <Link to="/projects" class="text-link"><Navitem> Projetos </Navitem></Link>
                <Link to="/notes" class="text-link"><Navitem> Notas </Navitem></Link>
            </div>
        </div>
    );
}

export default Navbar;