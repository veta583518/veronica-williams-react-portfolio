import React from "react";
import headshot from "../../assets/20160906_190743 (2).jpg";
import { Col, Jumbotron } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Jumbotron>
      <h1>Who am I?</h1>
      <p>This is where I will place a few tid bits about myself</p>
      <Col xs={6} md={4}>
        <Image
          src={headshot}
          alt="Veronica"
          className="headshot"
          roundedCircle
        />
      </Col>
    </Jumbotron>
  );
}

export default About;
