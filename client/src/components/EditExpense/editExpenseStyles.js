import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "550px",
    padding: "0.5rem 1rem",
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(2, 0),
      },
    },
  },
}));

export default useStyles;
