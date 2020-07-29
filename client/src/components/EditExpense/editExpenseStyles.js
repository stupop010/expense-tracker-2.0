import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "550px",
    padding: "0 1rem",
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(2, 0),
      },
      "& input": {
        color: "black",
      },
      "& textarea": {
        color: "black",
      },
      "& label": {
        color: "black",
      },
      "& p": {
        color: "black",
      },
      "& .MuiOutlinedInput-root": {
        color: "black",
      },
    },
    "& .MuiOutlinedInput-root fieldset": {
      borderColor: "black",
    },
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      cursor: "pointer",
      margin: "0 0.5rem",
      padding: "0.5rem 1.5rem",
      border: "none",
      borderRadius: "4px",
    },
  },
  purpleBtn: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cancelBtn: {
    backgroundColor: "#f22e2e",
    "&:hover": {
      backgroundColor: "#e01111",
    },
  },
}));

export default useStyles;
