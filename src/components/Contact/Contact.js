import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";
import {
  faPhoneAlt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("errorMessage", errorMessage);
  }

  return (
    <div className="contact-me">
      <div className="title-box">
        <h1 className="">Contact Me</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info shadow-lg">
          <h3>Contact Information</h3>
          <p>
            Want to get in touch? I'd love to hear from you. Complete this form
            and I will get back to you within 24 hr. You can also reach me at
            one of the below links. I look forward to hearing from you!{" "}
          </p>
          <div id="contact-icons">
            <div className="phone">
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <a href="tel:615-719-5062">+1(615) 719-5062</a>
            </div>
            <div className="email">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="contact-icon"
              />
              <a href="mailto:veta583518@gmail.com">veta583518@gmail.com</a>
            </div>
            <div className="gitHub">
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              <a href="www.github.com/veta583518">veta583518</a>
            </div>
            <div className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" />
              <a href="https://www.linkedin.com/in/veronica-williams-279a11b8/">
                Veronica Williams
              </a>
            </div>
          </div>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="8" controlId="validationCustom01">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
                aria-describedby="required"
              />
              <Form.Text id="required" muted>
                Required Field!
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="8">
              <Form.Label htmlFor="email">Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
                className="form-control"
                aria-describedby="required"
              />
              <Form.Text id="required" muted>
                Required Field!
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} lg="8">
              <Form.Label htmlFor="message">Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
                className="form-control"
                aria-describedby="required"
              />
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <Form.Text id="required" muted>
                Required Field!
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <button
            type="submit"
            className="btn btn-lg btn-outline-light text-light mt-3 shadow-lg"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
export default Contact;
