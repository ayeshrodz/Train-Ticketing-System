import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Profile from "../profile/Profile";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import "./AuthMain.css";

export default function AuthMain() {
  return (
    <div className="auth_main">
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center sign-up-main">
          <div className="w-100 sign-up-content">
            <Redirect to="/auth/signin" />
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </div>
        </Container>
      </AuthProvider>
    </div>
  );
}
