import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import personal from "../Images/PersonalDetails.png";
import loginsecurity from "../Images/LoginandSecurity.png";
import reviews from "../Images/Review.png";
import PersonIcon from "@material-ui/icons/Person";
import { useAuth } from "../../contexts/AuthContext";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import Form from "react-bootstrap/Form";


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
          <img src={reviews} className="reviews" alt="reviews" width="150" />
        </div>
      </div>
      <div className="personaltxt">
        <Button
          id="UncontrolledPopover"
          type="button"
          size="lg"
          variant="outline-danger"
        >
          Personal Details
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
          <PopoverHeader>Personal Details</PopoverHeader>
          <PopoverBody>
            <div className="PersonalPopOver">
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Form>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <div className="loginandsecuritytxt">
        <Button
          id="UncontrolledPopover1"
          type="button"
          size="lg"
          variant="outline-danger"
        >
          Login and Security
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover1">
          <PopoverHeader>Login and Security</PopoverHeader>
          <PopoverBody>
            <div className="loginandsecurityPopOver">
              <Form>
                <Form.Group controlId="formBasicpassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group controlId="formBasicNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>

                <Form.Group controlId="formBasicRePassword">
                  <Form.Label>Re-Enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-Enter Password"
                  />
                </Form.Group>
                <Button variant="outline-danger" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <div className="reviewstxt">
        <Button
          id="UncontrolledPopover2"
          type="button"
          size="lg"
          variant="outline-danger"
        >
          Write Reviews
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover2">
          <PopoverHeader>Write Reviews</PopoverHeader>
          <PopoverBody>
            <div className="loginandsecurityPopOver">
              <Form>
              <Form.Control type="text" placeholder="Write a Review" /><br />
                <Button variant="outline-danger" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </PopoverBody>
        </UncontrolledPopover>
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
