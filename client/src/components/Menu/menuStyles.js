import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightDark,
    borderRight: "1px solid rgba(255, 255, 255, 0.12)",
    "& hr": {
      backgroundColor: "rgba(255, 255, 255, 0.12)",
    },
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: theme.spacing(16),
    color: theme.palette.common.white,
    textTransform: "capitalize",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    fontSize: "2rem",
    marginBottom: theme.spacing(0.5),
  },
  nav: {
    padding: theme.spacing(2),
    color: theme.palette.common.lightGray,
    "& a": {
      color: "#76777a",
      textDecoration: "none",
    },
  },
}));

export const navActive = {
  fontWeight: "bold",
  color: "#c9cacc",
  textDecoration: "underline",
};
