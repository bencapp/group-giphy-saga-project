import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FavoritesView from "../FavoritesView/FavoritesView";
import SearchView from "../SearchView/SearchView";
import NavBar from "../NavBar/NavBar";

function App(props) {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <SearchView />
      </Route>
      <Route exact path="/favorites">
        <FavoritesView />
      </Route>
    </Router>
  );
}

export default App;
