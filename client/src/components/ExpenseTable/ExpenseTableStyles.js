import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 950,
    width: "100%",
  },
  table: {
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.lightDark,
    color: theme.palette.common.white,
    "& *": {
      color: theme.palette.common.white,
    },
    "& td": {
      borderBottom: "1px solid #9598A3",
    },
  },
  linkBtn: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    borderRadius: "4px",
    color: theme.palette.common.white,
    textDecoration: "inherit",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& span": {
      marginLeft: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  iconHover: {
    margin: theme.spacing(0, 0.3),
    "&:hover": {
      cursor: "pointer",
      "& *": {
        color: theme.palette.primary.dark,
      },
    },
  },
  deleteActions: {
    "& button": {
      fontSize: "1.1rem",
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 2),
      borderRadius: "4px",
      border: "none",
      boxShadow: theme.shadows[1],
    },
    "& :first-child": {
      backgroundColor: theme.palette.success.main,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.palette.success.dark,
      },
    },
    "& :last-child": {
      backgroundColor: theme.palette.error.main,
      height: console.log(theme),
      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.palette.error.dark,
      },
    },
  },
  noExpense: {
    padding: theme.spacing(2, 0, 0, 2),
    fontSize: "1.4rem",
  },
}));

export default useStyles;
