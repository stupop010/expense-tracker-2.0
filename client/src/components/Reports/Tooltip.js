import React from "react";
import PropTypes from "prop-types";

import useStyles from "./reportsStyles";

const Tooltip = ({ toggle, children }) => {
  const classes = useStyles(toggle);
  return (
    <div className={classes.tooltip}>
      <p>{children}</p>
    </div>
  );
};

Tooltip.propTypes = {
  toggle: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
