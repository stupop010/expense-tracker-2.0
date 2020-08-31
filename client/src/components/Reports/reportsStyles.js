import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  dashboardTitle: {
    textAlign: "center",
    margin: "1.5rem",
    fontSize: "2.2rem",
    color: theme.palette.common.lightGray,
  },
  dataContainer: {
    width: "1300px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "10px",
    marginTop: theme.spacing(2),

    "& .bar": {
      fill: theme.palette.primary.main,
    },

    "& .x-axis, & .y-axis": {
      color: theme.palette.common.lightGray,
      fontSize: "1rem",
    },

    "& .grid": {
      color: theme.palette.common.lightGray,
      opacity: "0.3",
    },
  },
  pieChart: {
    borderRadius: "10px",
    backgroundColor: theme.palette.background.dark,
    boxShadow: theme.shadows[5],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  barChart: {
    gridRowEnd: "span 2",
    padding: "50px 60px 50px 100px",
    backgroundColor: theme.palette.background.dark,
    boxShadow: theme.shadows[5],
  },
  infoContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.dark,
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
    color: theme.palette.common.lightGray,

    "& h3": {
      textAlign: "center",
    },

    "& ul": {
      listStyle: "none",
      padding: 0,
    },
  },

  tooltip: {
    display: (props) => (props.toggle ? "block" : "none"),
    position: "absolute",
    top: (props) => props.y + 15 + "px",
    left: (props) => props.x + "px",
    padding: theme.spacing(0.7, 1),
    backgroundColor: "#383d51",
    color: theme.palette.common.white,
    borderRadius: "2px",
    boxShadow: theme.shadows[4],
    pointerEvents: "none",
    "& p": {
      margin: 0,
      padding: 0,
    },
  },

  tooltipSpan: {
    borderLeft: "1px solid grey",
    paddingLeft: theme.spacing(1),
    marginLeft: theme.spacing(0.6),
  },
}));

export default useStyles;
