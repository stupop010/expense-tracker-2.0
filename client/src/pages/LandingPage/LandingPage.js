import React from "react";
import { Box, Typography } from "@material-ui/core";

import useStyles from "./landingPageStyles";
import landingImg from "../../assets/landing-min.png";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <div className={classes.landing}>
          <Box className={classes.text}>
            <Typography component="h2">Expense Tracker</Typography>
            <Typography>
              A expense tracker to keep up to date with all your expense.
            </Typography>
          </Box>
          <div className={classes.container}>
            <img src={landingImg} alt="expense tracker dashboard"></img>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default LandingPage;
