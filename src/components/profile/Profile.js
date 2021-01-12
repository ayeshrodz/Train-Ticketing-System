import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Alert, Dropdown } from "react-bootstrap";
import personal from "../Images/PersonalDetails.png";
import loginsecurity from "../Images/LoginandSecurity.png";
import review from "../Images/Review.png";
import PersonIcon from "@material-ui/icons/Person";
import { useAuth } from "../../contexts/AuthContext";

import "./Profile.css";

function Profile() {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function handleSignout() {
    setError("");
    try {
      await signout();
      history.push("/auth/signin");
    } catch {
      setError("Failed to sign out");
    }
  }

  return (
    <div className="profile">
      <div className="heading">
        <h1>Welcome to your Account</h1>
      </div>
      <div className="intro">
        <p>
          <h4 style={{ color: "grey" }}>
            We are making improvements and introducing new features into user
            experience.
          </h4>
        </p>
        <p>
          <h4 style={{ color: "grey" }}>It is now much easier to...</h4>
        </p>
      </div>
      <div className="Icons">
        <div>
          <img src={personal} className="personal" alt="personal" width="150" />
        </div>

        <div>
          <img
            src={loginsecurity}
            className="loginsecurity"
            alt="loginsecurity"
            width="150"
          />
        </div>

        <div>
          <img src={review} className="review" alt="review" width="150" />
        </div>
      </div>
      <div className="personaltxt">
        <h3>Personal Details</h3>
      </div>
      <div className="loginandsecuritytxt">
        <h3>Login and Security</h3>
      </div>
      <div className="reviewtxt">
        <h3>Write Review</h3>
      </div>
      <div className="user">
        <div>
          <PersonIcon className="user" />
        </div>
      </div>
      <div className="usertxt">
        {error && <Alert variant="danger">{error}</Alert>}
        {currentUser.email + " "}
        <Button variant="link" onClick={handleSignout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Profile;
