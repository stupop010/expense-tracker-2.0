import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Menu from "../components/Menu";
import AddExpense from "../components/AddExpense";
import ExpenseTable from "../components/ExpenseTable";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "250px auto",
    height: "90vh",
  },
  dashboard: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(3, 4),
    overflow: "scroll",
  },
}));

const GET_USER = gql`
  query UserClient {
    user @client {
      name
    }
  }
`;

const FETCH_EXPENSES = gql`
  query fetchExpenses {
    findAllExpenses {
      name
      price
      desc
      category
      id
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_USER);

  const classes = useStyles();

  let { path, url } = useRouteMatch();

  const {
    data: expensesData,
    loading: expensesLoading,
    error: expensesError,
    client,
  } = useQuery(FETCH_EXPENSES, {
    onCompleted: () => {
      client.writeData({
        data: {
          expenses: expensesData.findAllExpenses,
        },
      });
    },
  });

  if (loading) return null;
  console.log(data);

  return (
    <div className={classes.layout}>
      <Menu user={data.user} />
      <div className={classes.dashboard}>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/expenses`}>
            <ExpenseTable />
          </Route>
          <Route path={`${path}/add-expense`}>
            <AddExpense />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
