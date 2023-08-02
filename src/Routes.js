import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Film from "./pages/diff/Films";
import People from "./pages/diff/People";
import Planets from "./pages/diff/Planets";
import StarShips from "./pages/diff/StarsShips";
import Species from "./pages/diff/Species";
import Vehicles from "./pages/diff/Vehicles";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/films">
        <Film />
      </Route>
      <Route exact path="/people">
        <People />
      </Route>
      <Route exact path="/planets">
        <Planets />
      </Route>
      <Route exact path="/starships">
        <StarShips />
      </Route>
      <Route exact path="/species">
        <Species />
      </Route>
      <Route exact path="/vehicles">
        <Vehicles />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
