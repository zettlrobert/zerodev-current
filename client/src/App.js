import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/main.scss'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact'
import About from './components/pages/About';
import Projects from './components/pages/Projects'

//States
import ContactState from './context/carousel/CarouselState';
import CarouselState from './context/carousel/CarouselState';

function App() {
  useEffect(() => {
    //Init Materialize JS
    console.log("App Mounted...")
  })

  return (
    <CarouselState>
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
    </CarouselState>

  );
}

export default App;
