import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navi(props) {
  const { setCurrentPage } = props;

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      {/* <Navbar bg="dark" expand="lg"></Navbar> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <a
            href="#about"
            className="nav-link"
            onClick={() => {
              setCurrentPage("About");
            }}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => {
              setCurrentPage("Portfolio");
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => {
              setCurrentPage("Contact");
            }}
          >
            Contact
          </a>
          <a
            href="#resume"
            className="nav-link"
            onClick={() => {
              setCurrentPage("Resume");
            }}
          >
            Resume
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navi;
