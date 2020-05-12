import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Category from './components/category/Category'
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
import Login from './components/login/Login'
import MiniCarousel from './components/carousel/MiniCarousel'
import Register from './components/register/Register'



class App extends Component{
  render(){
  return (
    <Router>
      <Navbar/>
        <Switch>
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
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
