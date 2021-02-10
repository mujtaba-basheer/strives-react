import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

import Home from "./pages/Home";

/* Login */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* User Details */
import MyAccount from "./pages/User/MyAccount";
import ChangePassword from "./pages/User/ChangePassword";
import ManageAddress from "./pages/User/ManageAddress";

import Checkout from "./pages/Checkout";

/* Product Pages */
import AllProduct from "./pages/Product/AllProduct";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgot">
          <ForgotPassword />
        </Route>

        <Route exact path="/my-account">
          <MyAccount />
        </Route>

        <Route exact path="/change-password">
          <ChangePassword />
        </Route>

        <Route exact path="/manage-address">
          <ManageAddress />
        </Route>

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route exact path="/products">
          <AllProduct />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
