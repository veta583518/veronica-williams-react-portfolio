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
      className="footer-container fixed-bottom bg-white contact rounded-larger mx-3 mt-3 p-2 d-flex justify-content-center"
    >
      <footer sticky="bottom">
        <ul>
          <li className="mx-4">
            <a href="tel:6157195062" alt="telephone" className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li className="mx-4">
            <a href="mailto:veta583518@gmail.com" alt="email" className="icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </a>
          </li>
          <li className="mx-4">
            <a
              href="https://github.com/veta583518"
              alt="github"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li className="mx-4">
            <a
              href="https://www.linkedin.com/in/veronica-williams-279a11b8/"
              alt="linkedIn"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="mx-4">
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
