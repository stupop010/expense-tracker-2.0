import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import RegisterForm from "../components/RegisterForm";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const Register = () => {
  const [createUser, { data, loading, error, client }] = useMutation(
    CREATE_USER,
    {
      onCompleted: ({ createUser }) => {
        // TODO need to change to user context
        client.writeData({
          data: {
            isLoggedIn: true,
          },
        });
        localStorage.setItem("token", createUser.token);
      },
    }
  );
  return <RegisterForm createUser={createUser} error={error} />;
};

export default Register;
