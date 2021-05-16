import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    fistName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { firstName, lastName, email, message } = formState;

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
    <section className="contact-me">
      <div className="title-box">
        <h1 className="">Contact Me</h1>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              defaultValue={firstName}
              onBlur={handleChange}
              aria-describedby="required"
            />
            <Form.Text id="required" muted>
              Required Field!
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              defaultValue={lastName}
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
            <Form.Label htmlFor="email">Email address:</Form.Label>
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
          className="btn btn-lg btn-outline-light text-light mt-3"
        >
          Submit
        </button>
      </Form>
    </section>
  );
}
export default Contact;
