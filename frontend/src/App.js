import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar1'
import Navbar0 from './components/navbar/Navbar0'


function App() {
  return (
    <Router>
      <Navbar0/>
      <Navbar/>
    </Router>
     
  );
}

export default App;
