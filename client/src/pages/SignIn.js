import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import LoginForm from "../components/LoginForm";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      name
      email
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
          isUser: {
            name: signIn.name,
            email: signIn.email,
          },
        },
      });
      localStorage.setItem("token", signIn.token);
    },
  });

  return <LoginForm signIn={signIn} error={error} loading={loading} />;
};

export default SignIn;
