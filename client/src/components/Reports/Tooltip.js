import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: (props) => (props.toggle ? "block" : "none"),
    position: "absolute",
    top: (props) => props.y + 100 + "px",
    left: (props) => props.x + "px",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    pointerEvents: "none",
  },
}));

const Tooltip = ({ toggle }) => {
  console.log(toggle);
  const classes = useStyles(toggle);
  return (
    <div className={classes.root}>
      <p>s</p>
    </div>
  );
};

export default Tooltip;
