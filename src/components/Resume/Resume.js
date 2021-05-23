import React from "react";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
// renders resume
function Resume() {
  return (
    <section>
      <div className="title-box">
        <h1>Resume</h1>
      </div>

      <div className="resume-link ">
        <div className="text-center">
          <a href="./Veronica.Williams_Resume.pdf" download>
            <p className="">
              My Resume <FontAwesomeIcon icon={faFileDownload} />
            </p>
          </a>
        </div>
      </div>
      <div className="card-deck mx-2 d-flex justify-content-center">
        <div className="card flex-column skill-card">
          <h4 className="card-header">Front End</h4>
          <ul>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>HTML</p>
            <p>Progressive Web Applicaitons</p>
            <p>React</p>
            <p>Redux</p>
            <p>Bootstrap</p>
            <p>Bulma</p>
            <p>Materialize</p>
          </ul>
        </div>
        <div className=" card flex-column skill-card">
          <h4 className="card-header">Back End</h4>
          <ul>
            <p>APIs</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Inquirer.js</p>
            <p>Sequelize</p>
            <p>MySQL</p>
            <p>Mongoose</p>
            <p>MongoDB Atlas</p>
            <p>MongoDB</p>
            <p>GraphQL</p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
