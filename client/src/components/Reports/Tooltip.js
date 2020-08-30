import React from "react";

import useStyles from "./reportsStyles";

const Tooltip = ({ toggle, children }) => {
  const classes = useStyles(toggle);
  return (
    <div className={classes.tooltip}>
      <p>{children}</p>
    </div>
  );
};

export default Tooltip;
