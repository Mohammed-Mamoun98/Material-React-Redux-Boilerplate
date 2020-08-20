import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Courses from "./routes/Courses/Courses";
import TodoScreen from "./pages/TodoScreen";
import TableauDemo from "./pages/Tableau";
import MuiCard from "./components/MuiCard/MuiCard";
import TableHeader from "./components/tableHeader/TableHeader";
import CardModel from "./components/CardModel/CardModel";

function App(props) {
  return (
    <div className="main">
      <TableauDemo />
      {/* <TodoScreen /> */}
      {/* <MuiCard /> */}
      {/* <TableHeader /> */}
      {/* <CardModel /> */}
    </div>
  );
}

export default App;

// <Header />
// {/* <Courses /> */}
// <TextField
//   label="name"
//   className={classes.textFeild}
//   inputProps={{ ...classes.inputProps }}
//   color="red"
//   backgroundColor="red"
// />
