import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/login.js';
import Home from './pages/home/home.js';
import Edit from './components/edit'
import Delete from './components/delete'
import Incluide from './components/incluide'
import Navbar from './components/navbar'
import Paises from './components/paises'

export default function Routes(){
    return(
        <Router>
            
            <Switch>
    <Route path='/' exact >
        <Login />
        
    </Route>
    <Route path='/home' exact >
    <Home />
        <Link to='/edit' />
    </Route>
    <Route path='/edit' component={'Edit'} exact>
    <Navbar />
        <Edit />
    </Route> 
     <Route path='/delete' component={'Delete'} exact >
    <Navbar />
        <Delete />
    </Route>
    <Route path='/incluide' component={'Incluide'} exact >
    <Navbar />
        <Incluide />
    </Route>
    <Route path='/paises' component={'Paises'} exact >
    <Navbar />
        <Paises />
    </Route>

            </Switch>
            
            
        </Router>
    );
}