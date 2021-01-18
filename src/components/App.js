import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "./header/Header";
import "./App.css";
import Profile from "./profile/Profile";
import About from "./about/About";
import AuthMain from "./auth/AuthMain";
import Review from "./review/Review";
import NotFound from "./NotFound";
import Landing from "./Landing/Landing";
import SearchResult from "./SearchResult/SearchResult";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";
import Destination from "./Destinations/Destination"

function App() {
  return (
    <div>
      <Header />
      <div className="App container-fluid">
        <Router>
          <AuthProvider>
            <div className="app_body">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/searchresult" component={SearchResult} />
                <Route exact path  = "/destination" component = {Destination}/>
                <Route path="/auth" component={AuthMain} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
