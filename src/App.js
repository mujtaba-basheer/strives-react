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
import Wishlist from "./pages/User/Wishlist";

import Checkout from "./pages/Checkout";

/* Product Pages */
import AllProduct from "./pages/Product/AllProduct";
import SingleProduct from "./pages/Product/SingleProduct";
import Cart from "./pages/Cart";
import MyOrders from "./pages/User/MyOrders";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Register} />

        <Route exact path="/forgot" component={ForgotPassword} />

        <Route exact path="/my-account" component={MyAccount} />

        <Route exact path="/my-orders" component={MyOrders} />

        <Route exact path="/change-password" component={ChangePassword} />

        <Route exact path="/manage-address" component={ManageAddress} />

        <Route exact path="/wishlist" component={Wishlist} />

        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/cart" component={Cart} />

        <Route exact path="/products" component={AllProduct} />

        <Route exact path="/products/:id" component={SingleProduct} />
      </Switch>
    </Router>
  );
};

export default App;
