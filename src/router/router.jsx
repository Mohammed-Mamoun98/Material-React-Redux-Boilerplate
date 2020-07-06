import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={() => <>hello world!</>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
