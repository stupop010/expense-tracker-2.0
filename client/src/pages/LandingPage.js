import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: console.log(theme),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Typography>Landing Page</Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
