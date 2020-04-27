import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.dark,
  },
  formContainer: {
    width: "90%",
    maxWidth: "680px",
    margin: theme.spacing(10, "auto"),
    padding: theme.spacing(5, 2),
    color: theme.palette.common.white,
    backgroundColor: "#292D3D",
    borderRadius: "3px",
    boxShadow: theme.shadows[4],
    "& form": {
      display: "flex",
      paddingTop: theme.spacing(1),
      flexDirection: "column",
    },
    "& hr": {
      margin: theme.spacing(2, 0),
    },
  },
  input: {
    margin: theme.spacing(1, 0),
    color: theme.palette.common.white,
  },
  link: {
    color: "#9598A3",
    textDecoration: "inherit",
    "&:hover": {
      cursor: "hover",
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
