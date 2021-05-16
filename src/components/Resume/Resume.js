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
      <div className="skills-wrapper d-flex justify-content-center">
        <div className="card flex-column">
          <h4 className="card-header font-color">Front End</h4>
          <ul>
            <li className="font-color">CSS</li>
            <li className="font-color">JavaScript</li>
            <li className="font-color">JQuery</li>
            <li className="font-color">Responsive Design</li>
            <li className="font-color">Progressive Web Applicaitons</li>
            <li className="font-color">React</li>
            <li className="font-color">Redux</li>
            <li className="font-color">Bootstrap</li>
            <li className="font-color">Bulma</li>
            <li className="font-color">Materialize</li>
          </ul>
        </div>
        <div className=" card flex-column">
          <h4 className="card-header font-color">Back End</h4>
          <ul>
            <li className="font-color">APIs</li>
            <li className="font-color">Node</li>
            <li className="font-color">Express</li>
            <li className="font-color">MySQL, Sequlize</li>
            <li className="font-color">MongoDB, Mongoose</li>
            <li className="font-color">REST</li>
            <li className="font-color">GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
