import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

import Home from "./pages/Home";

/* Login */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* User Details */
import MyAccount from "./pages/MyAccount";


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
      </Switch>
    </Router>
  );
};

export default App;
