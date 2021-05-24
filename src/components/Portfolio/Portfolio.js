import React from "react";
import { Card, Col, Row, CardDeck } from "react-bootstrap";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from "../../assets/Pokefinder-Screenshot.PNG";
import OffBeatenPath from "../../assets/Off-the-Beaten-Path.jpg";
import NoteTaker from "../../assets/Note-Taker.PNG";
import ArtfulDodger from "../../assets/Artful Dodger.JPG";
import WeatherDashboard from "../../assets/WeatherDashboard.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <section id="work" className="card m-3">
      <div className="border-bottom">
        <h2 className="section-header card-title text-center">Portfolio</h2>
      </div>
      <CardDeck>
        <Row justify-contents-center>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={WeatherDashboard}
                class="d-block w-100"
                alt="Weather Dashboard"
              />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  <Card.Link
                    href="https://veta583518.github.io/WeatherDashboard/"
                    alt="weather dashboard site"
                  >
                    Deployed Site
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/veta583518/WeatherDashboard"
                    alt="weather dashboard repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={OffBeatenPath}
                class="d-block w-100"
                alt="Off the Beaten Path"
              />
              <Card.Body>
                <Card.Title>Off the Beaten Path</Card.Title>
                <Card.Text>
                  <Card.Link
                    href="https://craig5117.github.io/off-the-beaten-path/"
                    alt="off the beaten path site"
                  >
                    Deployed Application
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/Craig5117/off-the-beaten-path"
                    alt="off the beaten path repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={WorkDayScheduler}
                class="d-block w-100"
                alt="Workday Scheduler"
              />
              <Card.Body>
                <Card.Title>Workday Scheduler</Card.Title>
                <Card.Text>
                  <Card.Link
                    href="https://veta583518.github.io/WorkDayScheduler/"
                    alt="workday scheduler site"
                  >
                    Deployed Application
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/veta583518/WorkDayScheduler"
                    alt="workday scheduler repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={ArtfulDodger}
                class="d-block w-100"
                alt="Artful Dodger"
              />
              <Card.Body>
                <Card.Title>Artful Dodger</Card.Title>
                <Card.Text>
                  <Card.Link
                    className="deployed-site-link"
                    href="https://guarded-caverns-91294.herokuapp.com"
                    alt="artful dodger site"
                  >
                    Deployed Application
                  </Card.Link>

                  <Card.Link
                    href="https://github.com/Calterat/artfuldodger"
                    alt="artful dodger repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={NoteTaker}
                class="d-block w-100"
                alt="Note Taker"
              />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  <Card.Link
                    href="https://fierce-falls-88110.herokuapp.com"
                    alt="note taker site"
                  >
                    Deployed Application
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/veta583518/Note-Taker"
                    alt="note taker repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={Pokefinder}
                class="d-block w-100"
                alt="Pokefinder"
              />
              <Card.Body>
                <Card.Title>Pokefinder</Card.Title>
                <Card.Text>
                  <Card.Link
                    href="https://pokefinder-tcg.herokuapp.com/"
                    alt="pokefinder site"
                  >
                    Deployed Application:
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/Spody10/PokefinderTCG"
                    alt="pokefinder repo"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </section>
  );
}

export default Portfolio;
