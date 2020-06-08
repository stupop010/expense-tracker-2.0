import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { UserContext } from "../context/userContext/UserState";

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
  const { updateUser, isLoggedIn } = useContext(UserContext);
  const history = useHistory();

  if (isLoggedIn) history.push("/");

  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      updateUser(signIn);
      localStorage.setItem("token", signIn.token);
    },
  });

  return <LoginForm signIn={signIn} error={error} loading={loading} />;
};

export default SignIn;
