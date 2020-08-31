import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { UserContext } from "../context/userContext/UserState";
import { SIGN_IN } from "../graphQL/mutations";

import LoginForm from "../components/LoginForm";

const SignIn = () => {
  const { updateUser, isLoggedIn } = useContext(UserContext);

  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      updateUser(signIn);
      localStorage.setItem("token", signIn.token);
    },
  });

  if (isLoggedIn) return <Redirect to="/dashboard"></Redirect>;

  return <LoginForm signIn={signIn} error={error} loading={loading} />;
};

export default SignIn;
