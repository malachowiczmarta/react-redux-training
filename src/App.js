import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import Users from "./users/containers/Users";
import Home from "./home/containers/Home";

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
