import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <ul>
              <li>
                <Link to={"/"} className="nav-link"></Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
