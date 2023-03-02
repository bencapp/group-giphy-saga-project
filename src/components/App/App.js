import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import FavoritesView from "../FavoritesView/FavoritesView";
import SearchView from "../SearchView/SearchView";

function App(props) {
  return (
    <Router>
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
