import React from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import LoginForm from "../components/LoginForm";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const SignIn = () => {
  const [signIn, { data, loading, error, client }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      client.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      localStorage.setItem("token", signIn.token);
    },
  });

  if (loading) return <div>loading</div>;
  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  return <LoginForm signIn={signIn} />;
};

export default SignIn;
