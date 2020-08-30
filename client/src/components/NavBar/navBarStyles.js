import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightDark,
    height: "70px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 3),
  },
  title: {
    fontFamily: `'Bangers', cursive`,
    fontSize: "2rem",
  },
  nav: {
    display: "flex",
  },
  link: {
    borderRadius: "2px",
    "& a": {
      color: "inherit",
      textDecoration: "inherit",
    },
    "&:hover": {
      backgroundColor: "#4d536e",
    },
  },
}));

export default useStyles;
