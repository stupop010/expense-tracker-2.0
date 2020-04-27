import React from "react";
import Login from "../components/LoginForm/LoginForm";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    background: console.log(theme),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  console.log(data);
  return (
    <div>
      <Box className={classes.root}>
        <Typography>Landing Page</Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
