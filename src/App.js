import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./styles.css";
import Users from "./users/containers/Users";
import Home from "./home/containers/Home";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}
