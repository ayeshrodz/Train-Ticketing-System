import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="/review">REVIEW</Nav.Link>
            <Nav.Link href="/profile">PROFILE</Nav.Link>

            <NavDropdown title="ADMIN" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/schedules">
                SCHEDULES
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/auth">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
