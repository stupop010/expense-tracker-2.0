import { makeStyles } from "@material-ui/core/styles";

const authFormStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.dark,
    flex: 1,
  },
  formContainer: {
    position: "relative",
    width: "90%",
    maxWidth: "740px",
    background: "#292D3D",
    borderRadius: "3px",
    boxShadow: theme.shadows[4],
    margin: theme.spacing(15, "auto"),
  },
  form: {
    padding: theme.spacing(5, 2),
    color: theme.palette.common.white,
    "& h3": {
      padding: theme.spacing(2, 0),
    },
    "& form": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: theme.spacing(2, 0),
    },
    "& hr": {
      marginBottom: theme.spacing(1.5),
    },
  },
  input: {
    margin: theme.spacing(1, 0),
    color: theme.palette.common.white,
  },
  lockIcon: {
    position: "absolute",
    padding: theme.spacing(1.5, 2),
    backgroundColor: "#60d162",
    color: "white",
    borderRadius: "4px",
    transform: "translate(50%, -50%)",
  },
  info: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1.5),
    backgroundColor: theme.palette.common.black,
    borderRadius: "4px",
    "& p": {
      marginLeft: theme.spacing(1),
    },
    "& p span": {
      fontWeight: 600,
    },
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.3),
    fontSize: "1rem",
    fontWeight: 500,
    color: theme.palette.common.white,
    textTransform: "uppercase",
    border: "none",
    borderRadius: "4px",
    marginTop: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#936edd",
    },
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
