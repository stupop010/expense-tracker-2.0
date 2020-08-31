import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { useStyles, navActive } from "./menuStyles";

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
                  <NavLink to="/dashboard" exact activeStyle={navActive}>
                    Dashboard
                  </NavLink>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography>Expenses</Typography>
              <List>
                <ListItem>
                  <NavLink to="/dashboard/expenses" activeStyle={navActive}>
                    Expenses
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/dashboard/add-expense" activeStyle={navActive}>
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

Menu.prototype = {
  user: PropTypes.object.isRequired,
};

export default Menu;
