import React from 'react';
import Postlist from './posts/Postslist';
import Header from '../../Layout/Header/Header';

import './style.css'

const Home = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div>   
            <Postlist />
        </div>
    );
}

export default Home;