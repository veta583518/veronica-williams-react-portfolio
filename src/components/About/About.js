import React from "react";
import headshot from "../../assets/Headshot.jpg";
import { Col, Jumbotron, Image } from "react-bootstrap";
import logo from "../../assets/metal-texture-mono-signature.jpg";

function About() {
  return (
    <div>
      <section className="App-header">
        <div>
          <img src={logo} alt="logo" className="hero-logo" />
          <p className="logo-text">Full-Stack Developer</p>
        </div>
      </section>

      <section className="bio d-flex">
        <Col xs={4} md={2} className="imageContainer">
          <Image
            src={headshot}
            alt="Veronica"
            className="headshot"
            roundedCircle
          />
        </Col>
        <Col xs={6} md={4} className="bio-content">
          <h1 className="text-center">Who am I?</h1>
          <br></br>
          <p>
            With 10 years of proven experience in administrative, accounting
            concepts, and customer service/facing positions for several
            different companies, incorporated with my new web development skills
            I am confident I will make an immediate contributon to any team.
          </p>
          <p>
            Experienced coding bootcamp graduate with extensive background in
            various coding languages, developing mobile applications, and
            building websites from the ground up. Specializes in JavaScript and
            Python. Professional strengths include creative problem solving,
            written and verbal communication, and time management. Detail
            oriented mindset from 10+ years experience in the finance industry.
          </p>
        </Col>
      </section>
    </div>
  );
}

export default About;
