import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4040/graphql",
  cache,
  request: async (operation) => {
    const token = localStorage.getItem("token");
    try {
      await operation.setContext({
        headers: {
          "x-token": token ? token : "",
        },
      });
    } catch (e) {
      console.log(e);
    }
  },
  onError: ({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(`GraphQL Error: ${message}`);
        cache.writeData({
          data: {
            isLoggedIn: false,
          },
        });
        return localStorage.removeItem("token");
      });
    }
    if (networkError) {
      console.log(`Network Error: ${networkError.message}`);
    }
  },
});

cache.writeData({
  data: {
    isLoggedIn: false,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
