import React from "react";

import useStyles from "./purpleBtnStyles";

const PurpleBtn = ({ type, children }) => {
  const classes = useStyles();

  return (
    <button type={type} className={classes.root}>
      {children}
    </button>
  );
};

export default PurpleBtn;
