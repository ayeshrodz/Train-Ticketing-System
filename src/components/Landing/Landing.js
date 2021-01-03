import React from "react";
import "./Landing.css";
import logo from "../Images/bg-1.jpeg";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Landing() {
  return (
    <div className="bgcr">
      <div className="landing">
        <div align="center" className="chin-chin">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="slogan">Chin-Chin</h1>
          <h2>Online Train Ticket Booking Platform</h2>
        </div>

        <div className="arrow" width="100%">
          <div className="next-btn">
            <Link to="/home">
              <ArrowForwardIcon className="arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
