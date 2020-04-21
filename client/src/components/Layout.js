import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";

const Layout = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
