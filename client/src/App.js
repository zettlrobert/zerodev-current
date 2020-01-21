import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/main.scss'


import Navbar from './components/layout/Navigation/Navbar'
import SideDrawer from './components/layout/Navigation/SideDrawer'

import Backdrop from './utils/Backdrop';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Projects from './components/pages/Projects';


const App = props => {
  useEffect(() => {
    //Init Materialize JS
    console.log("App Mounted...")
  })

  const [initalState, changeState] = useState({
    sideDrawerOpen: false
  })

  const drawerToggleClickHandler = () => {
    changeState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  const backdropClickHandler = () => {
    changeState({ sideDrawerOpen: false })
  }


  let backdrop
  if (initalState.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }


  return (
    <Router>
      <Fragment>
        <div className="main-container">
          <Navbar drawerClickHandler={drawerToggleClickHandler} />
          <SideDrawer show={initalState.sideDrawerOpen} closeDrawer={drawerToggleClickHandler} />
          {backdrop}
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
