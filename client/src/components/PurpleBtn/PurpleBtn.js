import React from "react";
import PropTypes from "prop-types";

import useStyles from "./purpleBtnStyles";

const PurpleBtn = ({ type, children }) => {
  const classes = useStyles();

  return (
    <button type={type} className={classes.root}>
      {children}
    </button>
  );
};

PurpleBtn.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PurpleBtn;
