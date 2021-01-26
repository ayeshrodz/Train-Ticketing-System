import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../Images/bg-1.png";

function Landing() {
  return (
    <Container>
      <div className="bgcr">
        <div className = "landing">
        

  <div align="center" className="armadillo">
  <Image className="logo" src={logo} fluid />
    <h1 className="heading-1">Chin-Chin</h1>
    <h2 className="heading-2">Online Train Ticket Booking Platform</h2>
  </div>

<Row className="justify-content-center text-center ">
  <Col className="p-4">
    <Button className="button">
      <Link className="go-to-link" to="/home">
        Get Start <ArrowForwardIcon />
      </Link>
    </Button>
  </Col>
</Row>
        </div>
      </div>
    </Container>
  );
}

export default Landing;
