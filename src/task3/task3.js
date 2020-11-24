import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { MainPage } from '../mainPage/mainPage';
import { LastNews } from '../lastNews/lastNews';
import { Page } from '../page/page'
 
import './task3.css';

export const Task3 = () => {
    return (
        <BrowserRouter>
            <NavLink to = '/'>Main Page</NavLink>
            <NavLink to = '/page/limit/5'>Last news</NavLink>
            <Switch>
                <Route exact path = '/' component = {MainPage}></Route>
                <Route exact path = '/posts/:id' component = {Page}></Route>
                <Route exact path = '/page/limit/:limit' component = {LastNews}></Route>
            </Switch>
        </BrowserRouter>
    )
}