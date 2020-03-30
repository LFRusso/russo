import React from 'react';
import Postlist from './posts/Postslist';
import Header from '../../Layout/Header/Header';

import './style.css'

const Home = () => {
    return (
        <div>   
            <Postlist />
        </div>
    );
}

export default Home;