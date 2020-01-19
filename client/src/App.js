import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './scss/main.scss'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import About from './components/pages/About';
import Projects from './components/pages/Projects'


function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  })

  return (
    <Router>
      <Fragment>
      <div className="main-container">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/projects' component={Projects}></Route>
        </Switch>
      </div> 
      </Fragment>
    </Router>

  );
}

export default App;
