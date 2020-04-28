import React from "react";
import Box from "@material-ui/core/Box";

import useStyles from "./menuStyles";

const Menu = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div>hello</div>
    </Box>
  );
};

export default Menu;
