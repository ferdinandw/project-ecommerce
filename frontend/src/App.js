
import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar1'
import Navbar0 from './components/navbar/Navbar0'

import Carousel from './components/Carousel';
import Footer from './components/Footer';






class App extends Component{
  render(){
  return (
    <Router>
      <Navbar0/>
      <Navbar/>

      <Carousel/>
      <Footer/>
    </Router>

  );
}
}

export default App;
