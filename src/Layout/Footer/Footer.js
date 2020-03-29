import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

import './style.css';

class Footer extends React.Component {

    render () {

        return (
            <div className="footer">

                <div className="footer-icon">
                    <MdEmail size={30} color="#022B3A" />
                    <span>| lf.santos@usp.br</span>
                </div>
                
                <div className="footer-icon">
                    <FaGithub size={30} color="#022B3A" />
                    <span>| LFRusso</span>
                </div>
            </div>
        );
    }
}

export default Footer;