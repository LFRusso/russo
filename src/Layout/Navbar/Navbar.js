import React from 'react';
import Navitem from './Navitem';
import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import './style.css';



class Navbar extends React.Component {

    constructor(props) {

        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: true,
        };
    }


    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
        });
        console.log(this.state.collapsed)
    }

    render () {
        const collapsed = this.state.collapsed ? "collapsed" : "";

        return ( 
            <div class="navbar">

                <div className={"sidenav " + collapsed} onClick={this.toggleNavbar}>
                    <div class="navitems">
                        <Link to="/" className="text-link" onClick={ this.toggleNavbar }><Navitem icon="home"> Home </Navitem></Link>
                        <Link to="/about" className="text-link" onClick={ this.toggleNavbar }><Navitem icon="about"> Sobre </Navitem></Link>
                        <Link to="/projects" className="text-link" onClick={ this.toggleNavbar }><Navitem icon="projects"> Projetos </Navitem></Link>
                        <Link to="/notes" className="text-link" onClick={ this.toggleNavbar }><Navitem icon="notes"> Notas </Navitem></Link>
                    </div>
                    <div className="sidenav-foot">
                        <span><a className="text-link" target="_blank" href={"https://www.youtube.com/watch?v=2MtOpB5LlUA&t=223"}>@</a>russo</span>
                    </div>
                </div>

                <button className={"btn collapse-btn " + collapsed} onClick={ this.toggleNavbar } type="button">
                    <FaBars color="#efefef" size={30} /> 
                </button>
                
            </div>
        );
    }
}


export default Navbar;