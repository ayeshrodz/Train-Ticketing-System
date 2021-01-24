import React from "react";
import "./About.css";
import RailwayStation from "../Images/RailwayStation.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  console.log(RailwayStation);
  return (
    <Container>
      <Row className="justify-content-md-center w-responsive mt-5">
        <Col>
          <Image
            src="/img/RailwayStation.jpg"
            style={{ height: "auto", width: "100%" }}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-left mt-4">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col>
          <p class="text-justify">
            If you’re exploring Sri Lanka for the first time or embarking on
            your next Sri Lankan adventure, traveling by train is the ideal
            option to explore the beautiful cities and landscapes of Sri Lanka.
            We are here to make sure your Sri Lankan journey will remain
            remarkable. CHIN-CHIN makes it easy and affordable to buy Sri Lankan
            train tickets online. For daily travelers to far away journey
            travelers, we let you book your train journey easily, anytime,
            anywhere. <br />
            <br />
            CHIN-CHIN was launched in 2021 where our primary focus is to help
            our customers connect their interests by train, island wide. We are
            dedicated to offer the best experience to our customers. We look
            forward to meeting your Sri Lankan train tickets needs.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-left mt-5">
        <Col>
          <h1>Our Team</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-left mt-4">
        <Col>
          <p>Indula - Lead Project Manager</p>
          <p>Ayesh - Developer and Database Engineer</p>
          <p>Maharshi - System Analyst and Tester</p>
          <p>Rashitha - Developer and React Guru</p>
          <p>Sheenadi - Senior Developer and Tester</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
