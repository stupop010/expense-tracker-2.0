import React from "react";
import PropTypes from "prop-types";

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
  let errMsg;
  if (error.message) {
    errMsg = error.message.replace("GraphQL error:", "").trim();
  } else {
    errMsg = error.trim();
  }
  return <div className={classes.error}>{errMsg}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
