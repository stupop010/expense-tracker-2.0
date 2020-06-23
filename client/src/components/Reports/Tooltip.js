import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: (props) => (props.toggle ? "block" : "none"),
    position: "absolute",
    top: (props) => props.y + 15 + "px",
    left: (props) => props.x + "px",
    padding: theme.spacing(0.7, 1),
    backgroundColor: "#383d51",
    color: theme.palette.common.white,
    borderRadius: "2px",
    boxShadow: theme.shadows[4],
    pointerEvents: "none",
    "& p": {
      margin: 0,
      padding: 0,
    },
    "& span": {
      borderLeft: "1px solid grey",
      paddingLeft: theme.spacing(1),
      marginLeft: theme.spacing(0.6),
    },
  },
}));

const Tooltip = ({ toggle }) => {
  const { info, percent } = toggle;

  const classes = useStyles(toggle);

  if (!info) return null;

  return (
    <div className={classes.root}>
      <p>
        {info.category}: £{info.value} <span>{percent}</span>
      </p>
    </div>
  );
};

export default Tooltip;
