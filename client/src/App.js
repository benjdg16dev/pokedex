import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "../src/utilities/routes";

import Home from "../src/components/pages/home";
import About from "../src/components/pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/${Routes.ROUTE_HOME}`} component={Home} />
        <Route exact path={`/${Routes.ROUTE_ABOUT}`} component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
};

export default App;