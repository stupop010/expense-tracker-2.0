import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  breadcrumbs: {
    color: theme.palette.common.lightGray,
    "& a": {
      color: "inherit",
      textDecoration: "inherit",
      textTransform: "capitalize",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const DashboardBreadcrumbs = ({ pathname, children }) => {
  const classes = useStyles();
  const paths = pathname.split("/").splice(1);

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        className={classes.breadcrumbs}
      >
        {paths.map((path, index) => {
          return (
            <Link to={`/${path}`} key={index}>
              {path}
            </Link>
          );
        })}
      </Breadcrumbs>
      {children}
    </div>
  );
};

export default DashboardBreadcrumbs;
