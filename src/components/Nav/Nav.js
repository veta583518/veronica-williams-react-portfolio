import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navi(props) {
  const { setCurrentPage } = props;

  return (
    <section className="m-3">
      <Navbar expand="lg" variant="dark">
        {/* <Navbar bg="dark" expand="lg"></Navbar> */}
        {/* <Navbar.Brand>Veronica Williams</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav activeKey="About">
            <Nav.Link
              href="#about"
              onClick={() => {
                setCurrentPage("About");
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => {
                setCurrentPage("Portfolio");
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => {
                setCurrentPage("Contact");
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => {
                setCurrentPage("Resume");
              }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Navi;
