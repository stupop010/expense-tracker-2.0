import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    fontSize: "1.1rem",
    fontWeight: 500,
    textTransform: "capitalize",
    border: "none",
    borderRadius: "4px",
    color: theme.palette.common.white,
    padding: theme.spacing(1.3, 0),
    height: console.log(theme),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      cursor: "pointer",
    },
  },
}));

const PurpleBtn = ({ type, children }) => {
  const classes = useStyles();

  return (
    <button type={type} className={classes.root}>
      {children}
    </button>
  );
};

export default PurpleBtn;
