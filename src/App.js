import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";

const initilizeAnalytics = () => {
  ReactGA.initialize("UA-179501864-1");
  // ReactGA.pageview("/Home");

  ReactGA.pageview(window.location.pathname + window.location.search);
};

function App() {
  useEffect(() => {
    initilizeAnalytics();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
