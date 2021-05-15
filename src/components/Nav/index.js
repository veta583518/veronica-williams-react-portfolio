import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navi(props) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      {/* <Navbar bg="dark" expand="lg"></Navbar> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" onSelect={handleSelect}>
          <a href="#about" className="nav-link" eventKey="1">
            About Me
          </a>
          <a href="#portfolio" className="nav-link" eventKey="2">
            Portfolio
          </a>
          <a href="#contact" className="nav-link" eventKey="3">
            Contact
          </a>
          <a href="#resume" className="nav-link" eventKey="4">
            Resume
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navi;
