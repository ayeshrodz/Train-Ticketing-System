import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import personal from "../Images/PersonalDetails.png";
import loginsecurity from "../Images/LoginandSecurity.png";
import reviews from "../Images/Review.png";
import PersonIcon from "@material-ui/icons/Person";
import { useAuth } from "../../contexts/AuthContext";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserProfile from "../Images/userprofile.jpg";
import { Image } from "react-bootstrap";
import { db } from "../../firebase";
import "./Profile.css";

function Profile() {
  const [error, setError] = useState("");
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const [PDshow, setPDShow] = useState(false);
  const [SDshow, setSDShow] = useState(false);
  const [WRshow, setWRShow] = useState(false);
  const [Ishow, setIShow] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

  useEffect(() => {
    db.collection("Review").onSnapshot((snapshot) =>
      setReviews(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendReview = (e) => {
    e.preventDefault();

    db.collection("Review").add({
      UserName: currentUser.email,
      position: "Traveller",
      review: review,
    });
  };

  const PDhandleClose = () => {
    setPDShow(false);
  };
  const PDhandleShow = () => {
    setPDShow(true);
  };

  const SDhandleClose = () => {
    setSDShow(false);
  };
  const SDhandleShow = () => {
    setSDShow(true);
  };

  const WRhandleClose = () => {
    setWRShow(false);
  };
  const WRhandleShow = () => {
    setWRShow(true);
  };
  const IhandleClose = () => {
    setIShow(false);
  };
  const IhandleShow = () => {
    setIShow(true);
  };

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
    <div>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>
        Welcome to your Account
      </h1>

      <h4 style={{ textAlign: "center", marginTop: "2%" }}>
        We are making improvements and introducing new features into user
        experience.
      </h4>
      <Image
        src={UserProfile}
        alt="website logo"
        style={{ height: "auto", width: "60%", marginLeft: "20%" }}
      />

      <div className="user" style={{ marginTop: "-40%" }}>
        <div>
          <PersonIcon
            className="user"
            style={{ marginLeft: "85%", marginBottom: "-3%" }}
          />
        </div>

        <div
          className="usertxt"
          style={{ textAlign: "right", marginBottom: "3%" }}
        >
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.displayName + " "}
          <Button className="signout" variant="link" onClick={handleSignout}>
            Sign Out
          </Button>
        </div>
      </div>

      <div
        className="buttongroup"
        style={{ marginLeft: "10%", marginTop: "15%" }}
      >
        <ButtonGroup vertical>
          <div className="Personaldetails">
            <Button
              style={{ color: "#f25e42" }}
              variant="link"
              size="lg"
              onClick={PDhandleShow}
            >
              Personal Details
            </Button>
            <Modal
              show={PDshow}
              onHide={PDhandleClose}
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
                      <Form.Control
                        type="Email"
                        defaultValue={currentUser.email + " "}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={PDhandleClose}>
                  Close
                </Button>
                <Button
                  style={{ background: "#f25e42", border: "none" }}
                  onClick={PDhandleClose}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="loginandsecuritytxt">
            <Button
              style={{ color: "#f25e42" }}
              variant="link"
              size="lg"
              onClick={SDhandleShow}
            >
              Login and Security
            </Button>
            <Modal
              show={SDshow}
              onHide={SDhandleClose}
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
                <Button variant="secondary" onClick={SDhandleClose}>
                  Close
                </Button>
                <Button
                  style={{ background: "#f25e42", border: "none" }}
                  onClick={SDhandleClose}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="reviewstxt">
            <Button
              style={{ color: "#f25e42" }}
              variant="link"
              size="lg"
              onClick={WRhandleShow}
            >
              Write Reviews
            </Button>
            <Modal
              show={WRshow}
              onHide={WRhandleClose}
              centered
              target="WriteReviews"
            >
              <Modal.Header closeButton>
                <Modal.Title>Write Reviews</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="WriteReviewsModal">
                  <Form>
                    <Form.Control
                      type="text"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Write a Review"
                    />
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={WRhandleClose}>
                  Close
                </Button>
                <Button
                  style={{ background: "#f25e42", border: "none" }}
                  onClick={sendReview}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="inquriestxt">
            <Button
              style={{ color: "#f25e42" }}
              variant="link"
              size="lg"
              onClick={IhandleShow}
            >
              Inquries
            </Button>
            <Modal
              show={Ishow}
              onHide={IhandleClose}
              centered
              target="WriteReviews"
            >
              <Modal.Header closeButton>
                <Modal.Title>Inquries</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="WriteReviewsModal">
                  <Form>
                    <Form.Control type="text" placeholder="Write Your Inqury" />
                  </Form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={IhandleClose}>
                  Close
                </Button>
                <Button
                  style={{ background: "#f25e42", border: "none" }}
                  onClick={IhandleClose}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Profile;
