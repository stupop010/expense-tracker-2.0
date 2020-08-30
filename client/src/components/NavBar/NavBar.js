import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { UserContext } from "../../context/userContext/UserState";

import useStyles from "./navBarStyles";

const NavBar = () => {
  const classes = useStyles();
  const { isLoggedIn } = useContext(UserContext);

  return (
    <AppBar className={classes.root} position="static">
      <div>
        <Typography variant="h1" className={classes.title}>
          Expense Tracker
        </Typography>
      </div>

      <List dense className={classes.nav}>
        <ListItem className={classes.link}>
          <Link to="/dashboard">Dashboard</Link>
        </ListItem>

        {!isLoggedIn && (
          <>
            <ListItem className={classes.link}>
              <Link to="/login">Login</Link>
            </ListItem>
            <ListItem className={classes.link}>
              <Link to="/">Home</Link>
            </ListItem>
          </>
        )}

        {isLoggedIn && (
          <ListItem className={classes.link}>
            <Link to="/logout">Logout</Link>
          </ListItem>
        )}
      </List>
    </AppBar>
  );
};

export default NavBar;
