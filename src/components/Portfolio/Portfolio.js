import React, { useState } from "react";
import { Card, Col, Row, CardDeck, Modal, Button } from "react-bootstrap";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from "../../assets/Pokefinder-Screenshot.PNG";
import OffBeatenPath from "../../assets/Off-the-Beaten-Path.jpg";
import NoteTaker from "../../assets/Note-Taker.PNG";
import ArtfulDodger from "../../assets/Artful Dodger.JPG";
import WeatherDashboard from "../../assets/WeatherDashboard.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="title-box">
        <h1>Portfolio</h1>
      </div>

      <CardDeck className="project-container">
        <Row justify-contents-center>
          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={WeatherDashboard}
                class="d-block w-100"
                alt="Weather Dashboard"
              />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#weatherDashboardModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    show={show}
                    id="weatherDashboardModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Weather Dashboard</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a description of the Weather Dashboard app!</p>
                      <a
                        href="https://veta583518.github.io/WeatherDashboard/"
                        alt="weather dashboard site"
                      >
                        Site
                      </a>
                      <a
                        href="https://github.com/veta583518/WeatherDashboard"
                        alt="weather dashboard repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={OffBeatenPath}
                class="d-block w-100"
                alt="Off the Beaten Path"
              />
              <Card.Body>
                <Card.Title>Off the Beaten Path</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#offBeatenPathModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    show={show}
                    className="modal-fade"
                    id="offBeatenPathModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Off the Beaten Path</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        This is a description of the Off the Beaten Path app!
                      </p>
                      <a
                        href="https://craig5117.github.io/off-the-beaten-path/"
                        alt="off the beaten path site"
                      >
                        Site
                      </a>
                      <a
                        href="https://github.com/Craig5117/off-the-beaten-path"
                        alt="off the beaten path repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={WorkDayScheduler}
                class="d-block w-100"
                alt="Workday Scheduler"
              />
              <Card.Body>
                <Card.Title>Workday Scheduler</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#workdaySchedulerModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    className="modal-fade"
                    show={show}
                    id="workdaySchedulerModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Workday Scheduler</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a description of the Workday Scheduler app!</p>
                      <a
                        href="https://veta583518.github.io/WorkDayScheduler/"
                        alt="workday scheduler site"
                      >
                        Site
                      </a>
                      <a
                        href="https://github.com/veta583518/WorkDayScheduler"
                        alt="workday scheduler repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={ArtfulDodger}
                class="d-block w-100"
                alt="Artful Dodger"
              />
              <Card.Body>
                <Card.Title>Artful Dodger</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#artfulDodgerModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    show={show}
                    className="modal-fade"
                    id="artfulDodgerModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Artful Dodger</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a description of the Artful Dodger app!</p>
                      <a
                        className="deployed-site-link"
                        href="https://guarded-caverns-91294.herokuapp.com"
                        alt="artful dodger site"
                      >
                        Site
                      </a>

                      <a
                        href="https://github.com/Calterat/artfuldodger"
                        alt="artful dodger repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={NoteTaker}
                class="d-block w-100"
                alt="Note Taker"
              />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#noteTakerModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    show={show}
                    className="modal-fade"
                    id="noteTakerModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Note Taker</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a description of the Note Taker app!</p>
                      <a
                        href="https://fierce-falls-88110.herokuapp.com"
                        alt="note taker site"
                      >
                        Site
                      </a>
                      <a
                        href="https://github.com/veta583518/Note-Taker"
                        alt="note taker repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-container" style={{ width: "18rem" }}>
              <Card.Img
                src={Pokefinder}
                class="d-block w-100"
                alt="Pokefinder"
              />
              <Card.Body>
                <Card.Title>Pokefinder</Card.Title>
                <Card.Text>
                  <Button
                    className="details-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#pokefinderModal"
                    onClick={() => setShow(true)}
                  >
                    Details
                  </Button>
                  <Modal
                    show={show}
                    className="modal-fade"
                    id="pokefinderModal"
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Pokefinder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This is a description of the Pokefinder app!</p>
                      <a
                        href="https://pokefinder-tcg.herokuapp.com/"
                        alt="pokefinder site"
                      >
                        Site
                      </a>
                      <a
                        href="https://github.com/Spody10/PokefinderTCG"
                        alt="pokefinder repo"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </Modal.Body>
                  </Modal>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
}

export default Portfolio;
