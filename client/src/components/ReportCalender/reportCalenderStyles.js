import { makeStyles, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  popoverBg: {
    backgroundColor: theme.palette.background.dark,
    color: "#c9cacc",
  },
}));

export const Btn = withStyles((theme) => ({
  root: {
    color: "#c9cacc",
    "&:hover": {
      backgroundColor: theme.palette.background.dark,
    },
  },
}))(Button);
