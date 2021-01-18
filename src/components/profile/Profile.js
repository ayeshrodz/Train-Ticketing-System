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
import Modal from "react-bootstrap/Modal";

import "./Profile.css";

function Profile() {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          id="PersonalDetails"
          size="lg"
          variant="outline-danger"
          onClick={handleShow}
        >
          Personal Details
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          target="PersonalDetails"
        >
          <Modal.Header closeButton>
            <Modal.Title>Personal Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="PersonalDetailsModal">
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="UserName" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="Email" />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-danger" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="loginandsecuritytxt">
      <Button
          id="LoginandSecurity"
          size="lg"
          variant="outline-danger"
          onClick={handleShow}
        >
          Login and Security
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          target="PersonalDetails1"
        >
          <Modal.Header closeButton>
            <Modal.Title>Login and Security</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="LoginandSecurityModal">
              <Form>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" />
                </Form.Group>

                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="Password" />
                </Form.Group>

                <Form.Group controlId="formRepassword">
                  <Form.Label>Re-Enter Password</Form.Label>
                  <Form.Control type="Password" />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-danger" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
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
                <Form.Control type="text" placeholder="Write a Review" />
                <br />
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
