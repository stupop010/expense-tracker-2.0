import React, { useState } from "react";

const LoginForm = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await signIn({ variables: { email, password } });
          } catch (e) {
            console.log(e);
          }
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

export default LoginForm;
