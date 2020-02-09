import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import useStyles from "./themes";
import MuiCard from "../MuiCard/MuiCard";

export default function TableHeader(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <Card className={classes.row}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <Card className={classes.row}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <Card className={classes.row}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <Card className={classes.row}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <Card className={classes.row}>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Card>
      <MuiCard />
    </>
  );
}
