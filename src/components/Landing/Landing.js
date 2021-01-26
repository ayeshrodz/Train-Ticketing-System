import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../Images/bg-1.jpeg"

function Landing() {
  return (
   <div className = "bgcr">
     <div className = "landing">
       <div align = "center" className = "chin-chin">
          <img src = {logo} className = "logo"/>
          <h1 className = "slogan">Chin - Chin</h1>
       </div>
       <div className="justify-content-center text-center ">
       <Button variant="outline-warning">
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
