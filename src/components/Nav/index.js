import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navi(props) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <header>
      {/* <Navbar bg="dark" expand="lg"></Navbar> */}
      <Nav
        variant="pills"
        className="navi flex-wrap justify-content-wround"
        onSelect={handleSelect}
      >
        <Nav.Link href="#about" eventKey="1">
          About Me
        </Nav.Link>
        <Nav.Link href="#portfolio" eventKey="2">
          Portfolio
        </Nav.Link>
        <Nav.Link href="#contact" eventKey="3">
          Contact
        </Nav.Link>
        <Nav.Link href="#resume" eventKey="4">
          Resume
        </Nav.Link>
      </Nav>
    </header>
  );
}

export default Navi;
