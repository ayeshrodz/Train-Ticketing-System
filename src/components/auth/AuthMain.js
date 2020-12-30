import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import "./AuthMain.css";

export default function AuthMain() {
  return (
    <div className="auth_main">
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center sign-up-main">
          <div className="w-100 sign-up-content">
            <Signup />
          </div>
        </Container>
      </AuthProvider>
    </div>
  );
}
