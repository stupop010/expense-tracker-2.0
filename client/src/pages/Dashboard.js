import React from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Menu from "../components/Menu";
import DashboardBreadcrumbs from "../components/DashboardBreadcrumbs";
import AddExpense from "../components/AddExpense";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "250px auto",
    height: "90vh",
  },
  dashboard: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(3, 4),
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

  const classes = useStyles();

  let { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <div className={classes.layout}>
      <Menu user={data.user} />
      <div className={classes.dashboard}>
        <DashboardBreadcrumbs pathname={pathname} />
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          {/* <Route path={`${path}/report`}>
            <p>h</p>
          </Route> */}
          <Route path={`${path}/add-expense`}>
            <AddExpense />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
