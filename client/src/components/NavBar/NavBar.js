import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightDark,
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 3),
  },
  title: {
    fontFamily: `'Bangers', cursive`,
    fontSize: "2rem",
  },
  nav: {
    display: "flex",
  },
  link: {
    borderRadius: "2px",
    "& a": {
      color: "inherit",
      textDecoration: "inherit",
    },
    "&:hover": {
      backgroundColor: "#4d536e",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

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
        <ListItem className={classes.link}>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem className={classes.link}>
          <Link to="/">Home</Link>
        </ListItem>
      </List>
    </AppBar>
  );
};

export default NavBar;
