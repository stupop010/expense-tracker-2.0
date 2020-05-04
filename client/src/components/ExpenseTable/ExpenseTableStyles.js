import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 950,
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.lightDark,
    color: theme.palette.common.white,
    overflow: "scroll",
    "& *": {
      color: theme.palette.common.white,
    },
    "& td": {
      borderBottom: "1px solid #9598A3",
    },
  },
  linkBtn: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textDecoration: "inherit",
  },
}));

export default useStyles;
