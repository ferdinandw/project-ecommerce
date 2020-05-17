import React, { Component } from "react";
// import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
// import Searches from './components/searchFilter/Searches'
import Category from "./components/category/Category";
import Carousel from "./components/carousel/Carousel";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ItemSell from "./components/ItemSelling/ItemSell";
import Login from "./components/login/Login";
import MiniCarousel from "./components/carousel/MiniCarousel";
import Register from "./components/register/Register";
import cartReducer from "./components/reducer/CartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Item from "./components/reducer/item";
const store = createStore(cartReducer);
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar />
          {/* <Searches /> */}
          <Switch>
            <Route path="/login">
              <Login />
              <Category />
            </Route>
            <Route path="/register">
              <Register />
              <Category />
            </Route>
            <Route path="/seller">
              <ItemSell />
              <Category />
            </Route>
            <Route path="/cart">
              <Cart />
              <Category />
            </Route>
            <Route path="/">
              <Carousel />
              <MiniCarousel />
              <Home />
              <Category />
              <Item />
            </Route>
          </Switch>
          <Footer />
        </Provider>
      </Router>
    );
  }
}

export default App;
