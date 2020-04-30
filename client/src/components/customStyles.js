import { withStyles, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const CssTextField = withStyles({
  root: {
    "& input": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#A67CF8",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9598A3",
      },
      "&:hover fieldset": {
        borderColor: "#9598A3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#A67CF8",
      },
    },
  },
})(TextField);

export const ExpenseInput = withStyles({
  root: {
    "& textarea": {
      color: "#9699A4",
    },
    "& input": {
      color: "#9699A4",
    },
    "& label": {
      color: "#9699A4",
    },
    "& p": {
      color: "#9699A4",
    },
    "& label.Mui-focused": {
      color: "#A67CF8",
    },
    "& .MuiOutlinedInput-root": {
      color: "#9699A4",
      "& fieldset": {
        borderColor: "#9699A4",
      },
      "&:hover fieldset": {
        borderColor: "#9598A3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#A67CF8",
      },
    },
    "& svg": {
      color: "#9598A3",
    },
  },
})(TextField);

export const authFormStyles = makeStyles((theme) => ({
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
    margin: theme.spacing(10, "auto"),
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
      "& button": {
        marginTop: theme.spacing(2),
      },
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
  link: {
    color: "#9598A3",
    textDecoration: "inherit",
    "&:hover": {
      cursor: "hover",
      textDecoration: "underline",
    },
  },
}));
