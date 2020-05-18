import React, { Component } from "react";
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
import Login from "./components/login/Login2";
import MiniCarousel from "./components/carousel/MiniCarousel";
import Register from "./components/register/Register";
import cartReducer from "./components/reducer/CartReducer";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authToken";
import store from "./store/store";
import { setCurrentUser, logoutUser } from "./components/actioncreators/auth";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import TesSearch from "./components/searchFilter/TesSearch";
import Item from "./components/reducer/item";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

// const storage = createStore(cartReducer);
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar />
          {/* <TesSearch /> */}
          <Switch>
            <Route path="/login">
              <Login />
              {/* <Category /> */}
            </Route>
            <Route path="/register">
              <Register />
              {/* <Category /> */}
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
              {/* <Home /> */}
              <Item />
              <Category />
            </Route>
          </Switch>
          <Footer />
        </Provider>
      </Router>
    );
  }
}

export default App;
