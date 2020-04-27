import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { CssTextField, authFormStyles } from "../customStyles";

const RegisterForm = () => {
  const classes = authFormStyles();
  const [value, setValue] = useState({});

  const submit = (e) => {
    e.preventDefault();
    console.log(value);
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
            <button type="submit" className={classes.btn}>
              create account
            </button>
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
