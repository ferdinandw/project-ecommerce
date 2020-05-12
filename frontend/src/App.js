
import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar1";
import Navbar0 from "./components/navbar/Navbar0";

import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar0 />
        <Navbar />


import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar1'
import Navbar0 from './components/navbar/Navbar0'
import Category from './components/Category'
import Carousel from './components/Carousel';
import Description from './components/Description'
import Footer from './components/Footer';
import Home from './components/Home'
import Login from './components/Login'
import Man from './components/Man'
import MiniCarousel from './components/MiniCarousel'
import Register from './components/Register'






class App extends Component{
  render(){
  return (
    <Router>
      <Navbar0/>
      <Navbar/>

        <Switch>
          <Route path="/new">
            <Description />
          </Route>
          <Route path="/man">
            <Man/>
          </Route>
          <Route path="/woman">
            <Description/>
          </Route>
          <Route path="/electronic">
            <Description/>
          </Route>
          <Route path="/accessories">
            <Description/>
          </Route>
          <Route path="/beauty">
            <Description/>
          </Route>
          <Route path="/login">
            <Login/>
            <Category/>
          </Route>
          <Route path="/register">
            <Register/>
            <Category/>
          </Route>
          <Route path="/">
            <Carousel/>
            <MiniCarousel/>
            <Home/>
            <Category/>
            <Carousel />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
