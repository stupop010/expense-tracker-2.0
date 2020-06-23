import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dataContainer: {
    paddingTop: theme.spacing(2),
    "& svg": {
      borderRadius: "10px",
      backgroundColor: theme.palette.background.dark,
      boxShadow: theme.shadows[5],
    },
  },
}));

export default useStyles;
