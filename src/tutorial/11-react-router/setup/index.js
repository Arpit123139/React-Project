import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
// the Navbar component will occur in every page because it is not specific to a single route 
// the switch component helps us to that if one route matches it will not check further 
// "*" route is every other route 
const ReactRouterSetup = () => {
  return (
    <Router>             
      <Navbar />             
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id'><Person/></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
};

export default ReactRouterSetup;
