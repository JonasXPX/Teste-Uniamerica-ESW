import React from 'react';
import ReactDOM from 'react-dom';
import {Projeto} from './Projeto.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header';

const routing = (
    <Router>
        <Header />
      <Switch>
        <Route exact path="/" component={Projeto} />
      </Switch>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));
