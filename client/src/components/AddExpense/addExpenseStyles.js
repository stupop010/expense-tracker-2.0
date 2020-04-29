import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    "& h2": {
      fontSize: "1.7rem",
    },
  },
  form: {
    "& form": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default useStyles;
