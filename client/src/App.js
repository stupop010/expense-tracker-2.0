import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import "./App.css";
import HelmetHead from "./components/Helmet";
import StyleTheme from "./components/StyleTheme";
import Layout from "./components/Layout";

// const SIGN_IN = gql`
//   {
//     getAllUsers {
//       name
//       email
//       id
//     }
//   }
// `;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  console.log(data);
  return (
    <StyleTheme>
      <HelmetHead />
      <Layout />
    </StyleTheme>
  );
}

export default App;
