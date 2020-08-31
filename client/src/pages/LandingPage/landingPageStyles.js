import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#292D3D",
    minHeight: "750px",
  },

  landing: {
    display: "flex",
    maxWidth: "1250px",
    margin: "auto",
    padding: "10rem 0",
    justifyContent: "space-evenly",
    color: console.log(theme),

    "@media (max-width: 1300px)": {
      maxWidth: "900px",
    },

    "@media (max-width: 1000px)": {
      width: "95%",
      display: "block",
      padding: "2rem 0",
    },
  },

  text: {
    textAlign: "center",
    "& h2": {
      color: theme.palette.primary.main,
      fontSize: "3.5rem",
      marginTop: "2rem",
      fontWeight: 600,
    },

    "& p": {
      fontSize: "1.5rem",
      color: theme.palette.common.lightGray,
      marginTop: "2rem",
    },
  },

  container: {
    height: "500px",
    width: "50%",
    perspective: "20em",

    "& img": {
      height: "100%",
      width: "100%",
      transform: "rotateY(-5deg)",
      boxShadow: theme.shadows[5],
    },

    "@media (max-width: 1300px)": {
      width: "90%",
    },

    "@media (max-width: 1000px)": {
      marginTop: "5rem",
      paddingBottom: "4rem",
    },
  },
}));

export default useStyles;
