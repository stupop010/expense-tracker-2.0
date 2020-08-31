import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import PrivateRoute from "./PrivateRoute";

const useStyles = makeStyles(() => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.layout}>
        <NavBar />

        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" exact>
            <SignIn />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/logout" exact>
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
