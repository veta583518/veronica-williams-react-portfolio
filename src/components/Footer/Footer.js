import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section
      id="contact-me"
      className="contact rounded-larger m-3 p-2 d-flex justify-content-center"
    >
      <footer sticky="bottom">
        <ul>
          <li>
            <a href="tel:6157195062" alt="telephone" className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li>
            <a href="mailto:veta583518@gmail.com" alt="email" className="icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/veta583518"
              alt="github"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/veronica-williams-279a11b8/"
              alt="linkedIn"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vetaCodes?s=09"
              alt="twitter"
              className="icon"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Footer;
