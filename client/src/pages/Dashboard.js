import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { UserContext } from "../context/userContext/UserState";
import { ExpenseContext } from "../context/expenseContext/ExpenseState";
import { FETCH_THIS_YEAR_EXPENSES } from "../graphQL/querys";

import Menu from "../components/Menu";
import AddExpense from "../components/AddExpense";
import ExpenseTable from "../components/ExpenseTable";
import Reports from "../components/Reports";

const Dashboard = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const { user } = useContext(UserContext);

  const { fetchExpenses, expenses, deleteContextExpense } = useContext(
    ExpenseContext
  );

  const { data, loading, client } = useQuery(FETCH_THIS_YEAR_EXPENSES, {
    onCompleted: ({ findThisYearExpenses }) => {
      fetchExpenses(findThisYearExpenses);
    },
  });

  return (
    <div className={classes.layout}>
      <Menu user={user} />
      <div className={classes.dashboard}>
        <Switch>
          <Route exact path={path}>
            <Reports expenses={expenses} />
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

export default Dashboard;
