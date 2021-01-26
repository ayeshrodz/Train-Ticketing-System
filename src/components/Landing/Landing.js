import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";

function Landing() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="lg-6">
          <Image className="logo" src="/img/landing.jpeg" fluid />
        </Col>
      </Row>
      <Row className="justify-content-md-center text-center ">
        <Col md="auto">
          <h1 className="heading-1">Chin-Chin</h1>
          <h2 className="heading-2">Online Train Ticket Booking Platform</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center ">
        <Col className="p-4">
          <Button style = {{background: "#f25e42", border: "none"}}>
            <Link className="go-to-link" to="/home">
              Get Start <ArrowForwardIcon />
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
