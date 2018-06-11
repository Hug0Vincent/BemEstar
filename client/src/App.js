import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './SearchCoach';
import Results from './Result';
import Coach from './Coach';

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'
import 'font-awesome/css/font-awesome.css'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
       <Router>
             <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/in/:qualif' component={Results} />
                <Route exact path='/coach/:id' component={Coach} />
                <Route path="*" render={() => (<Redirect to="/" />)} />
             </Switch>
       </Router>
    );
 }
}

export default App;
