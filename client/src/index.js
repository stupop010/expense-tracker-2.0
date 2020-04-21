import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { InMemoryCache } from "apollo-cache-inmemory";

import { resolvers, typeDefs } from "./resolvers";
import App from "./App";

const cache = new InMemoryCache();

// const link = new HttpLink({
//   headers: { authorization: localStorage.getItem("token") },
//   uri: "http://localhost:4040/graphql",
// });

const client = new ApolloClient({
  uri: "http://localhost:4040/graphql",
  // cache,
});

cache.writeData({
  data: {
    isLoggedIn: !localStorage.getItem("token"),
  },
});

console.log(HttpLink);
console.log(client);
ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // </React.StrictMode>
  document.getElementById("root")
);
