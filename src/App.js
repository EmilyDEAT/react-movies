import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MoviesList from "./components/MoviesList/MoviesList";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Redirect to="/populaire" />
        </Route>
        <Route path="/:genre" component={MoviesList} />
      </Switch>
    </div>
  );
};

export default App;
