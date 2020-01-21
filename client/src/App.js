import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/main.scss'


import Navigation from './components/layout/Navbar'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Projects from './components/pages/Projects';


function App() {
  useEffect(() => {
    //Init Materialize JS
    console.log("App Mounted...")
  })

  return (
    <Router>
      <Fragment>
        <div className="main-container">
          <Navigation />
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
