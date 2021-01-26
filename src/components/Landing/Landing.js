import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../Images/bg-1.jpeg"

function Landing() {
  return (
    <Container>
      <Row className="justify-content-md-center">
       <div>
       <Image className="logo" src={logo} fluid />
       </div>
      </Row>
      <Row className="justify-content-md-center text-center ">
       
         <div>
         <h1 className="heading-1">Chin-Chin</h1>
          <h2 className="heading-2">Online Train Ticket Booking Platform</h2>
         </div>
        
      </Row>
      <Row className="justify-content-center text-center ">
        <Col className="p-4">
          <Button className = "button">
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
