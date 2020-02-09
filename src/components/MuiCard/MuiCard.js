import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Collapse,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "30rem",
    maxHeight: "auto",
    margin: "auto",
    marginTop: "5rem"
  },
  actionArea: { height: "100%" },
  collapse: {
    height: "3rem"
  },
  row: {
    minHeight: "5%",
    maxWidth: "60%",
    margin: "1rem auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Montserrat"
  },
  Arow: {
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Montserrat",
    width: "100%",
    height: "100%",
    margin: "1rem auto"
  }
}));

//CollapseAble Component

export default function MuiCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <CardActionArea
      className={classes.row}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {/* <h1 style={{ padding: "2rem" }}>hello</h1> */}
      {/* <Card className={classes.Arow}> */}
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <Collapse
        in={expanded}
        timeout={100}
        unmountOnExit
        collapsedHeight="5rem"
      >
        {/* <h1>world</h1> */}
      </Collapse>
      {/* </Card> */}
    </CardActionArea>
  );
}
