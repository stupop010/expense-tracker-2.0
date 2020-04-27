import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  error: {
    width: "100%",
    margin: theme.spacing(1.5, 0),
    padding: theme.spacing(1.5, 1.5),
    backgroundColor: theme.palette.error.light,
    borderRadius: "3px",
    fontWeight: 700,
  },
}));

const ErrorMessage = ({ error }) => {
  const classes = useStyles();
  const errMsg = error.message.replace("GraphQL error:", "").trim();
  return <div className={classes.error}>{errMsg}</div>;
};

export default ErrorMessage;
