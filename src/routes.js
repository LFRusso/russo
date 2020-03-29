import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';

import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Notes from './pages/Notes';


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/notes" component={Notes} />
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;