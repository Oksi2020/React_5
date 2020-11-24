import React from 'react';
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

import { HomePage, List, About, Contacts, Item, notFoundPage } from '../pages/test1';

import './menu.css';


export const Menu = () => {
    return(
        <>
            <BrowserRouter>
                <Link to = '/homePage'>Home page</Link>
                <Link to = '/list'>List</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contacts'>Contacts</Link>
                <Link to = '/item'>Contacts</Link>
            <Switch>
                <Redirect exact from = '/' to ='/homePage'></Redirect>
                <Route exact path = '/homePage' component = {HomePage}/>
                <Route exact path = '/list' component = {List}/>
                <Route exact path = '/about' component = {About}/>
                <Route exact path = '/contacts' component = {Contacts}/>
                <Route exact path = '/list/:id' component = {Item}/>
                <Route exact path = '/notFoundPage' component = {notFoundPage}/>
                <Route component = {notFoundPage}/>
            </Switch>

                
            </BrowserRouter>
        </>
    )

}