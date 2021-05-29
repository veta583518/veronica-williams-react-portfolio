import React from "react";
import headshot from "../../assets/Headshot.jpg";
import { Col, Row, Image, Container } from "react-bootstrap";
import logo from "../../assets/metal-texture-mono-signature.jpg";

function About() {
  return (
    <div>
      <section className="App-header">
        <div>
          <img src={logo} alt="logo" className="hero-logo" />
        </div>
      </section>
      <Container className="container-md">
        <Row className="bio align-items-center">
          <Col className="imageContainer">
            <Image
              src={headshot}
              alt="Veronica"
              className="headshot"
              roundedCircle
            />
          </Col>
          <Col className="bio-content">
            <h1 className="text-center">Who am I?</h1>
            <br></br>
            <p>
              With proven experience in administrative, accounting concepts, and
              customer service/facing positions for several different companies,
              incorporated with my new web development skills I am confident I
              will make an immediate contributon to any team.
            </p>
            <p>
              Experienced coding bootcamp graduate with extensive background in
              various coding languages, developing mobile applications, and
              building websites from the ground up. Specializes in JavaScript
              React, and Bootstrap. Professional strengths include creative
              problem solving, written and verbal communication, and time
              management. Detail oriented mindset from 10+ years experience in
              the finance industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
