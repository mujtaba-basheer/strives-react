import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";

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
        <Route exact path="/otp">
          <Otp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
