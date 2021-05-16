import React from "react";
import { Carousel } from "react-bootstrap";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from "../../assets/Pokefinder-Screenshot.PNG";
import OffBeatenPath from "../../assets/Off-the-Beaten-Path.jpg";
import NoteTaker from "../../assets/Note-Taker.PNG";
import ArtfulDodger from "../../assets/Artful Dodger.JPG";
import WeatherDashboard from "../../assets/WeatherDashboard.JPG";

function CarouselContainer() {
  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#weatherDashboard"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#offTheBeatenPath" data-slide-to="1"></li>
          <li data-target="#workDayScheduler" data-slide-to="2"></li>
          <li data-target="#artfulDodger" data-slide-to="2"></li>
          <li data-target="#noteTaker" data-slide-to="2"></li>
          <li data-target="#pokefinder" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={WeatherDashboard}
              class="d-block w-100"
              alt="Weather Dashboard"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Weather Dashboard</h5>
              <p className="app-description">
                This application uses open weather's server-side API's to
                display current weather and also a 5-day forcast.
              </p>
              <p className="deployed-site-link">
                <a
                  href="https://veta583518.github.io/WeatherDashboard/"
                  alt="weather dashboard site"
                >
                  Deployed Application
                </a>
              </p>
              <p className="repo-link">
                <a
                  href="https://github.com/veta583518/WeatherDashboard"
                  alt="weather dashboard repo"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={OffBeatenPath}
              class="d-block w-100"
              alt="Off the Beaten Path"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Off the Beaten Path</h5>
              <p className="app-description">
                A simple app that helps you locate hiking trails nearby to your
                chosen location.
              </p>
              <p className="deployed-site-link">
                <a
                  href="https://craig5117.github.io/off-the-beaten-path/"
                  alt="off the beaten path site"
                >
                  Deployed Application
                </a>
              </p>
              <p className="repo-link">
                <a
                  href="https://github.com/Craig5117/off-the-beaten-path"
                  alt="off the beaten path repo"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={WorkDayScheduler}
              class="d-block w-100"
              alt="Workday Scheduler"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Workday Scheduler</h5>
              <p className="app-description">
                This is a calendar application that allows a user to save events
                for each hour of the day. This app will run in the browser and
                feature dynamically updated HTML and CSS powered by jQuery.
              </p>
              <p className="deployed-site-link">
                <a
                  href="https://veta583518.github.io/WorkDayScheduler/"
                  alt="workday scheduler site"
                >
                  Deployed Application
                </a>
              </p>
              <p className="repo-link">
                <a
                  href="https://github.com/veta583518/WorkDayScheduler"
                  alt="workday scheduler repo"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={ArtfulDodger} class="d-block w-100" alt="Artful Dodger" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Artful Dodger</h5>
              <p className="app-description">
                This is an anonymous chatting application with no repercussions.
              </p>
              <p className="deployed-site-link">
                <a
                  href="https://guarded-caverns-91294.herokuapp.com"
                  alt="artful dodger site"
                >
                  Deployed Application
                </a>
              </p>
              <p className="repo-link">
                <a
                  href="https://github.com/Calterat/artfuldodger"
                  alt="artful dodger repo"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={NoteTaker} class="d-block w-100" alt="Note Taker" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Note Taker</h5>
              <p className="app-description">
                This app gives you the abilty to write and save notes. Handy to
                organize thoughts and keep track of tasked needed to be
                completed.
              </p>
              <p className="deployed-site-link">
                <a
                  href="https://fierce-falls-88110.herokuapp.com"
                  alt="note taker site"
                >
                  Deployed Application
                </a>
              </p>
              <p className="repo-link">
                <a
                  href="https://github.com/veta583518/Note-Taker"
                  alt="note taker repo"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={Pokefinder} class="d-block w-100" alt="Pokefinder" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pokefinder</h5>
              <p className="app-description">
                A trading card app that is a meeting ground for those looking to
                part ways with their cards, and those looking for cards to
                snatch up.
              </p>
              <p className="deployes-site-link">
                Deployed Application: https://pokefinder-tcg.herokuapp.com/
              </p>
              <p className="repo-link">
                https://github.com/Spody10/PokefinderTCG
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default CarouselContainer;
