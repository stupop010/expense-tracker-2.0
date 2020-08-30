import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

import RegisterForm from "../components/RegisterForm";

import { UserContext } from "../context/userContext/UserState";
import { CREATE_USER } from "../graphQL/mutations";

const Register = () => {
  const { updateUser } = useContext(UserContext);

  const [createUser, { error }] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      updateUser(createUser);
    },
  });
  return <RegisterForm createUser={createUser} error={error} />;
};

export default Register;
