import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";

function Header() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

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
            src="/img/icon3.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Chin-Chin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="search">Search</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
  </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
