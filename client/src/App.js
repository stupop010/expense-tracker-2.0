import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

import "./App.css";
import HelmetHead from "./components/Helmet";
import StyleTheme from "./components/StyleTheme";
import Layout from "./components/Layout";

const FECTH_USER = gql`
  {
    user {
      name
      email
      id
    }
  }
`;

function App() {
  const client = useApolloClient();

  const { data, loading, error } = useQuery(FECTH_USER, {
    onCompleted: () => client.writeData({ data: { isLoggedIn: true } }),
  });

  // console.log(data, "fetch user");

  if (loading) return <div>Loading</div>;
  // if (error) return <div>error</div>;

  return (
    <StyleTheme>
      {}
      <HelmetHead />
      <Layout />
    </StyleTheme>
  );
}

export default App;
