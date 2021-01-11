import React from "react";
import "./Profile.css";
import { Nav, CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Profile() {
  return (
    <div className="profile">
      <div className="heading">
        <h1>Welcome to your Account</h1>
      </div>
      <div className="intro">
        <p>
          <h4>
            We are making improvements and introducing new features into user
            experience.
          </h4>
        </p>
        <p>
          <h4>It is now much easier to...</h4>
        </p>
      </div>
      <div className="Navbar">
        <Nav className="flex-column">
          <Nav.Link eventKey="link" disabled>
            Account Overview
          </Nav.Link>
          <Nav.Link href="/personal">Personal Details</Nav.Link>
          <Nav.Link href="loginandsecurity">Login and Security</Nav.Link>
          <Nav.Link href="link-3">Payment Methods</Nav.Link>
        </Nav>
      </div>
      <div className="card">
        <CardGroup border="primary" style={{ width: "75rem", height: "28rem" }}>
          <Card>
            <Card.Img
              variant="top"
              src="https://image.freepik.com/free-vector/map-icon-isometric-with-destination-location-pin-pointer-illustration-flat-cartoon_101884-839.jpg"
            />
            <Card.Body>
              <Card.Text>
                <h3>Save detinations for speedy bookings.</h3>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-2/512/lock_user_man_secure-512.png"
            />
            <Card.Body>
              <Card.Text>
                <h3>Update your details and change your password.</h3>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://previews.123rf.com/images/yupiramos/yupiramos1908/yupiramos190884881/129257433-clock-time-bulb-stairs-on-white-background-vector-illustration-vector-illustration.jpg"
            />
            <Card.Body>
              <Card.Text>
                <h3>And much more to come soon…</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Profile;
