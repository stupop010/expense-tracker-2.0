import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

import RegisterForm from "../components/RegisterForm";

import { UserContext } from "../context/userContext/UserState";
import { CREATE_USER } from "../graphQL/mutations";

const Register = () => {
  const { updateUser } = useContext(UserContext);

  const [createUser, { error, loading }] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      updateUser(createUser);
    },
  });
  return (
    <RegisterForm createUser={createUser} error={error} loading={loading} />
  );
};

export default Register;
