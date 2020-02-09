import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "5%",
    maxWidth: "60%",
    marginTop: "5rem",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#00bcd4",
    fontFamily: "Montserrat"
  },
  row: {
    minHeight: "5%",
    maxWidth: "60%",
    margin: "1rem auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Montserrat"
  }
}));

export default useStyles;
