import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Search from "./search/Search";
import About from "./about/About";
import AuthMain from "./auth/AuthMain";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Router>
        <Header />
        <div className="app_body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/search">
              <Search />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <AuthMain />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
