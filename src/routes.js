import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';

import Header from './Layout/Navbar/Header'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Notes from './pages/Notes';


const Routes = () => {
    return (
        <BrowserRouter>
            <Header />

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