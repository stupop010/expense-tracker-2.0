import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import { UserProvider } from "./context/userContext/UserState";
import { ExpenseProvider } from "./context/expenseContext/ExpenseState";

import App from "./App";
import client from "./apollo";

ReactDOM.render(
  <UserProvider>
    <ExpenseProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ExpenseProvider>
  </UserProvider>,

  document.getElementById("root")
);
