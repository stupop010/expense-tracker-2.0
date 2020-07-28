import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
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
          {/* <Route path="/dashboard"> */}
          {/* <Dashboard /> */}
          {/* </Route> */}
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
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
