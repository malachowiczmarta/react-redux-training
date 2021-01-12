import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/Home";

import "./styles.css";
import Users from "./users/containers/Users";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Home />
          <Users />
        </div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
