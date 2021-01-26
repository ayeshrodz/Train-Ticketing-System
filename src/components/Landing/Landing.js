import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../Images/bg-1.jpeg"

function Landing() {
  return (
<<<<<<< HEAD
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
=======
   <div className = "bgcr">
     <div className = "landing">
       <div align = "center" className = "chin-chin">
          <img src = {logo} className = "logo"/>
          <h1 className = "slogan">Chin - Chin</h1>
       </div>
       <div className="justify-content-center text-center ">
       <Button variant="outline-warning">
>>>>>>> 314465ac86b75bf339eb737442666a77cd7acaa1
            <Link className="go-to-link" to="/home">
              Get Start <ArrowForwardIcon />
            </Link>
          </Button>
       </div>
     </div>
   </div>
  );
}

export default Landing;
