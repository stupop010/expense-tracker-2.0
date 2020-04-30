import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import useStyles from "./menuStyles";

const Menu = ({ user }) => {
  const classes = useStyles();
  const { name } = user;

  return (
    <Box className={classes.root}>
      {name && (
        <>
          <Box className={classes.avatar}>
            <Avatar className={classes.large}>{name[0]}</Avatar>
            <Typography variant="subtitle1">{name}</Typography>
          </Box>
          <Divider />
          <Box className={classes.nav}>
            <Box>
              <Typography>Reports</Typography>
              <List>
                <ListItem>
                  <NavLink
                    to="/dashboard"
                    exact
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    hello
                  </NavLink>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography>Expenses</Typography>
              <List>
                <ListItem>
                  <NavLink
                    to="/dashboard/expenses"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Expenses
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to="/dashboard/add-expense"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Add Expense
                  </NavLink>
                </ListItem>
              </List>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Menu;