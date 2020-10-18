import Axios from 'axios';
import Swal from 'sweetalert';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
import _ from 'lodash';
import Nav from './nav';
import Stat from './stat';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home'


function App() {
  
  return (
    <Router>
      <div className="container" >
        < Nav />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/stat" component={Stat} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;