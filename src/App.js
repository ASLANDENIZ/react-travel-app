import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Earth from './components/pages/Earth';
import Discover from './components/pages/Discover';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/earth' component={Earth}/>
          <Route path='/discover' component={Discover}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
