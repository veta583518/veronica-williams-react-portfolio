import React from "react";
import headshot from "../../assets/20160906_190743 (2).jpg";
import { Col, Jumbotron } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div>
      <Jumbotron className="App-header">
        <div></div>
      </Jumbotron>

      <div className="bio d-flex">
        <Col xs={6} md={4}>
          <Image
            src={headshot}
            alt="Veronica"
            className="headshot"
            roundedCircle
          />
        </Col>
        <Col xs={12} md={8} className="bio-content">
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
      </div>
    </div>
  );
}

export default About;
