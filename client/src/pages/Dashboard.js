import React from "react";
import { makeStyles } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Menu from "../components/Menu";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "250px auto",
    height: "90vh",
  },
  dashboard: {
    backgroundColor: theme.palette.background.dark,
  },
}));

const GET_USER = gql`
  query UserClient {
    user @client {
      name
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_USER);
  console.log(data, loading, error);
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Menu />
      <div className={classes.dashboard}>reports</div>
    </div>
  );
};

export default Dashboard;
