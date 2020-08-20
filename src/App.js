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
import Router from "./router/router";

function App(props) {
  return (
    <div className="">
      <Router />
    </div>
  );
}

export default App;
