import React from "react";
import Login from "../components/LoginForm/LoginForm";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const LandingPage = () => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  console.log(data);
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default LandingPage;
