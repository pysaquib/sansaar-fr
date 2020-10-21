import React from "react";
import Login from "./views/Login/login";
import { Grid } from "@material-ui/core";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Router/history"
import HomePage from './components/HomePage'

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={HomePage} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
