import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import About from "./about/About";
import AuthMain from "./auth/AuthMain";
import Review from "./review/Review";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app_body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/review" component={Review} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={AuthMain} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
