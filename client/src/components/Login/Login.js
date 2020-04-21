import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      email
    }
  }
`;

const Login = () => {
  const [signIn, { data, loading }] = useMutation(SIGN_IN);
  console.log(signIn, data);
  console.log(loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) return <div>loading</div>;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn({ variables: { email, password } });
        }}
      >
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
