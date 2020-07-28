import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { CssTextField, authFormStyles } from "../customStyles";
import ErrorMessage from "../ErrorMessage";
import PurpleBtn from "../PurpleBtn";

const RegisterForm = ({ createUser, loading, error }) => {
  const history = useHistory();
  const classes = authFormStyles();
  const [value, setValue] = useState({});
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (error) setIsError(error);
  }, [error]);

  const submit = async (e) => {
    e.preventDefault();
    if (value.password !== value.password2) {
      return setIsError("Passwords don't match");
    }
    try {
      await createUser({ variables: { ...value } });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h3">Sign up</Typography>
          {isError && <ErrorMessage error={isError} />}
          <form onSubmit={submit}>
            <CssTextField
              label="Name"
              variant="outlined"
              name="name"
              type="text"
              className={classes.input}
              onChange={onChange}
            />
            <CssTextField
              label="Email Address"
              variant="outlined"
              name="email"
              type="email"
              className={classes.input}
              onChange={onChange}
            />
            <CssTextField
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              className={classes.input}
              onChange={onChange}
            />
            <CssTextField
              label="Confirm Password"
              variant="outlined"
              name="password2"
              type="password"
              className={classes.input}
              onChange={onChange}
            />
            <PurpleBtn type="submit" className={classes.btn}>
              create account
            </PurpleBtn>
          </form>
          <Divider />
          <Link to="/login" className={classes.link}>
            Have a account?
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default RegisterForm;
