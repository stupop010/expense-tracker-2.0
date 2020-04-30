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
      maxWidth: "640px",
      width: "100%",
      "& > *": {
        margin: theme.spacing(2, 0),
      },
    },
  },
}));

export default useStyles;
