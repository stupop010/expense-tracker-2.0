import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import PrivateRoute from "./PrivateRoute";

const Layout = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
