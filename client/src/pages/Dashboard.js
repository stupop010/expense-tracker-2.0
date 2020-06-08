import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { UserContext } from "../context/userContext/UserState";
import { ExpenseContext } from "../context/expenseContext/ExpenseState";

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
  const { user } = useContext(UserContext);
  const { fetchExpenses, expenses, deleteContextExpense } = useContext(
    ExpenseContext
  );

  const classes = useStyles();

  let { path, url } = useRouteMatch();

  const { data, loading, client } = useQuery(FETCH_EXPENSES, {
    onCompleted: () => {
      fetchExpenses(data);
    },
  });

  return (
    <div className={classes.layout}>
      <Menu user={user} />
      <div className={classes.dashboard}>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/expenses`}>
            <ExpenseTable
              expenses={expenses}
              deleteContextExpense={deleteContextExpense}
            />
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
