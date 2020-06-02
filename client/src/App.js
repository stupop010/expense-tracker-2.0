import React, { useEffect, useContext } from "react";
import { gql } from "apollo-boost";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { UserContext } from "./context/userContext/UserState";

import "./App.css";
import HelmetHead from "./components/Helmet";
import Layout from "./components/Layout";

import theme from "./theme";

const FECTH_USER = gql`
  query fetchUser {
    user {
      name
      email
    }
  }
`;

function App() {
  const client = useApolloClient();
  const { updateUser } = useContext(UserContext);

  const { data, loading, error } = useQuery(FECTH_USER, {
    onCompleted: (data) => {
      updateUser(data);
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) console.log(error);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetHead />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
