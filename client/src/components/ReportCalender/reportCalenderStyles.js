import { makeStyles, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  reportCalender: {
    position: "relative",
  },
  popoverBg: {
    backgroundColor: theme.palette.background.dark,
    color: "#c9cacc",
  },
  calendar: {
    background: "white",
  },
  showCalendar: {
    display: "block",
    position: "absolute",
    right: "110px",
  },
  notDisplay: {
    display: "none",
  },
  closeIcon: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0.5rem",
    cursor: "pointer",
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    padding: "0.5rem",
    "& button": {
      fontSize: "1rem",
      padding: "0.2rem 1rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
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
