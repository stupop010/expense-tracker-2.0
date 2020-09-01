import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { UserContext } from "./context/userContext/UserState";

import HelmetHead from "./components/Helmet";
import Layout from "./components/Layout";

import { FETCH_USER } from "./graphQL/querys";
import theme from "./theme";
import "./assets/global.css";

function App() {
  const { updateUser } = useContext(UserContext);

  const { error } = useQuery(FETCH_USER, {
    onCompleted: ({ user }) => {
      updateUser(user);
    },
  });

  // if (loading) return <div>Loading</div>;
  if (error) console.log("Not authenticated");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetHead />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
