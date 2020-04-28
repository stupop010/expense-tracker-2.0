import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightDark,
    borderRight: "1px solid rgba(255, 255, 255, 0.12)",
    overflow: "scroll",
  },
}));

export default useStyles;
