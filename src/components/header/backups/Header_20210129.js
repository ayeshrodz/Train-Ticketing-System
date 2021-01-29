import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Person from "@material-ui/icons/Person";
import ExploreIcon from "@material-ui/icons/Explore";
import InfoIcon from "@material-ui/icons/Info";
import RateReviewIcon from "@material-ui/icons/RateReview";
import HomeIcon from "@material-ui/icons/Home";
import Tooltip from "@material-ui/core/Tooltip";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="light"
        className="color-nav"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/img/icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Chin-Chin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">
              <Tooltip title="Home" aria-label="home">
                <HomeIcon />
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="/review">
              <Tooltip title="Reviews" aria-label="review">
                <RateReviewIcon />
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="/destination">
              <Tooltip title="Destinations" aria-label="destination">
                <ExploreIcon />
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="/about">
              <Tooltip title="About Us" aria-label="about">
                <InfoIcon />
              </Tooltip>
            </Nav.Link>
            <Nav.Link href="/profile">
              <Tooltip title="Profile" aria-label="profile">
                <Person />
              </Tooltip>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
