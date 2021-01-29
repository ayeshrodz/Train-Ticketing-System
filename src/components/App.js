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
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./auth/PrivateRoute";
import Destination from "./Destinations/Destination";
import Cart from "./cart/Cart";

function App() {
  return (
    <div>
      <div className="App container-fluid">
        <Router>
          <Header />
          <AuthProvider>
            <div className="app_body">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <PrivateRoute exact path="/cart" component={Cart} />
                <Route exact path="/about" component={About} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/destination" component={Destination} />
                <Route path="/auth" component={AuthMain} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </AuthProvider>
        </Router>
      </div>
      <footer class="footer">
        <div class="container footer-container">
          <span class="text-muted">Chin-Chin © 2021, ECU Final Project</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
