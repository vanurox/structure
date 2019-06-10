import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Website from './website';
import Admin from './admin';
import Login from './common/Login';
import NoComponent from './common/NoComponent';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import cookies from 'react-cookies';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            {/* <Route path="/" exact component={Website} />
            <Route path="/admin" component={Admin} /> */}
            <Route path="/" exact render={(props)=> {
                return cookies.load('role') === "admin" ? <Admin {...props}/> : <Website {...props}/>
            }} />
            <Route path="/login" render={(props)=>{
                return cookies.load('role') === undefined ? <Login {...props}/> : <Redirect to="/"/>
            }} />
            <Route component={NoComponent}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
