import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(1, 2),
    color: theme.palette.common.lightGray,
    "& a": {
      color: "inherit",
      textDecoration: "inherit",
    },
  },
}));

const DashboardBreadcrumbs = ({ pathname }) => {
  const classes = useStyles();
  const paths = pathname.split("/").splice(1);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.root}>
      {paths.map((path, index) => {
        // if (paths.length - 1 === index) {
        //   return (
        //     <Typography color="textPrimary">
        //       {paths[paths.length - 1]}
        //     </Typography>
        //   );
        // }
        return <Link to={`/${path}`}>{path}</Link>;
      })}
    </Breadcrumbs>
  );
};

export default DashboardBreadcrumbs;
