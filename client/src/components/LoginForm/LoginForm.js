import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { CssTextField, authFormStyles } from "../customStyles";
import ErrorMessage from "../ErrorMessage";
import PurpleBtn from "../PurpleBtn";

const LoginForm = ({ signIn, loading, error }) => {
  const history = useHistory();
  const classes = authFormStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ variables: { email, password } });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.lockIcon}>
          <LockIcon fontSize="large" color="inherit" />
        </div>
        <div className={classes.form}>
          <Typography variant="h3">Sign in</Typography>
          {error && <ErrorMessage error={error} />}
          <div className={classes.info}>
            <InfoOutlinedIcon />
            <p>
              Use <span>stu@email.com</span> and password <span>stu</span>
            </p>
          </div>
          <form onSubmit={submit}>
            <CssTextField
              label="Email Address"
              variant="outlined"
              name="email"
              type="email"
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <CssTextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              className={classes.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <PurpleBtn type="submit" className={classes.btn}>
              Log In
            </PurpleBtn>
          </form>
          <Divider />

          <Link to="/register" className={classes.link}>
            Create new account
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default LoginForm;
