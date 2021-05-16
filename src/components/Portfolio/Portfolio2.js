import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from "../../assets/Pokefinder-Screenshot.PNG";
import OffBeatenPath from "../../assets/Off-the-Beaten-Path.jpg";
import NoteTaker from "../../assets/Note-Taker.PNG";
import ArtfulDodger from "../../assets/Artful Dodger.JPG";
import WeatherDashboard from "../../assets/WeatherDashboard.JPG";

function Portfolio() {
  return (
    <section id="work" className="card text-light p-2 m-1">
      <div className="border-bottom">
        <h2 className="section-header card-title text-center">Portfolio</h2>
      </div>

      <div className="container projects pt-3">
        <Row pb-3>
          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://veta583518.github.io/WeatherDashboard/"
            >
              <Card.Img
                src={`${WeatherDashboard}`}
                width="cover"
                height="cover"
                alt="Weather Dashboard Website"
              />
              <Card.ImgOverlay>
                <Card.Title>Weather Dashboard</Card.Title>
                <a
                  href="https://github.com/veta583518/WeatherDashboard"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>

          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://craig5117.github.io/off-the-beaten-path/"
            >
              <Card.Img
                src={`${OffBeatenPath}`}
                width="cover"
                height="cover"
                alt="Off the Beaten Path Website"
              />
              <Card.ImgOverlay>
                <Card.Title>Off the Beaten Path</Card.Title>
                <a
                  href="https://github.com/Craig5117/off-the-beaten-path"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>
        </Row>

        <Row pb-3>
          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://veta583518.github.io/WorkDayScheduler/"
            >
              <Card.Img
                src={`${WorkDayScheduler}`}
                width="cover"
                height="cover"
                alt="Workday Scheduler Website"
              />
              <Card.ImgOverlay>
                <Card.Title>Workday Scheduler</Card.Title>
                <a
                  href="https://github.com/veta583518/WorkDayScheduler"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>

          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://guarded-caverns-91294.herokuapp.com"
            >
              <Card.Img
                src={`${ArtfulDodger}`}
                width="cover"
                height="cover"
                alt="Artful Dodger Website"
              />
              <Card.ImgOverlay className="card-img-overlay">
                <Card.Title>Artful Dodger</Card.Title>
                <a
                  href="https://github.com/Calterat/artfuldodger"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>
        </Row>

        <Row>
          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://fierce-falls-88110.herokuapp.com/"
            >
              <Card.Img
                src={`${NoteTaker}`}
                width="cover"
                height="cover"
                alt="Note Taker Website"
              />
              <Card.ImgOverlay>
                <Card.Title>Note Taker</Card.Title>
                <a
                  href="https://github.com/veta583518/Note-Taker"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>
          <Col md="6" project pb-2>
            <a
              className="card bg-dark text-white"
              href="https://pokefinder-tcg.herokuapp.com/"
            >
              <Card.Img
                src={`${Pokefinder}`}
                width="cover"
                height="cover"
                alt="Pokefinder Website"
              />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Pokefinder</Card.Title>
                <a
                  href="https://github.com/Spody10/PokefinderTCG"
                  class="text-white "
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </Card.ImgOverlay>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Portfolio;
