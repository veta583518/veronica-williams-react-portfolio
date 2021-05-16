import { Carousel } from "bootstrap";
import { React, useState } from "react";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from "../../assets/Pokefinder-Screenshot.PNG";
import OffBeatenPath from "../../assets/Off-the-Beaten-Path.jpg";
import NoteTaker from "../../assets/Note-Taker.PNG";
import ArtfulDodger from "../../assets/Artful Dodger.JPG";
import WeatherDashboard from "../../assets/WeatherDashboard.JPG";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OffBeatenPath}
          alt="Off the Beaten Path"
        />
        <Carousel.Caption>
          <h3>Off the Beaten Path</h3>
          <p>
            A simple app that helps you locate hiking trails nearby to your
            chosen location.
          </p>
          <p className="deployed-site-link">
            Deployed
            Application:[https://craig5117.github.io/off-the-beaten-path/](https://craig5117.github.io/off-the-beaten-path/){" "}
          </p>
          <p className="repo-link">
            GitHub:
            [https://github.com/Craig5117/off-the-beaten-path](https://github.com/Craig5117/off-the-beaten-path)
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Pokefinder} alt="Pokefinder" />

        <Carousel.Caption>
          <h3>Pokefinder</h3>
          <p>
            A trading card app that is a meeting ground for those looking to
            part ways with their cards, and those looking for cards to snatch
            up.
          </p>
          <p className="deployes-site-link">
            Deployed Application: https://pokefinder-tcg.herokuapp.com/
          </p>
          <p className="repo-link">https://github.com/Spody10/PokefinderTCG</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WorkDayScheduler}
          alt="Pokefinder"
        />

        <Carousel.Caption>
          <h3>Work Day Scheduler</h3>
          <p>
            This is a calendar application that allows a user to save events for
            each hour of the day. This app will run in the browser and feature
            dynamically updated HTML and CSS powered by jQuery.
          </p>
          <p className="deployed-site-link">
            Deployed Application:
            [https://veta583518.github.io/WorkDayScheduler/](https://veta583518.github.io/WorkDayScheduler/){" "}
          </p>
          <p className="repo-link">
            GitHub:
            [https://github.com/veta583518/WorkDayScheduler](https://github.com/veta583518/WorkDayScheduler){" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={NoteTaker} alt="Note Taker" />

        <Carousel.Caption>
          <h3>Note Taker</h3>
          <p>
            This app gives you the abilty to write and save notes. Handy to
            organize thoughts and keep track of tasked needed to be completed.
          </p>
          <p className="deployed-site-link">
            Deployed Application:
            [https://fierce-falls-88110.herokuapp.com](https://fierce-falls-88110.herokuapp.com){" "}
          </p>
          <p className="repo-link">
            GitHub:
            [https://github.com/veta583518/Note-Taker](https://github.com/veta583518/Note-Taker){" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ArtfulDodger}
          alt="Work Day Scheduler"
        />

        <Carousel.Caption>
          <h3>Artful Dodger</h3>
          <p>
            This is an anonymous chatting application with no repercussions.
          </p>
          <p className="deployed-site-link">
            Deployed Application:
            [https://guarded-caverns-91294.herokuapp.com](https://guarded-caverns-91294.herokuapp.com)
          </p>
          <p className="repo-link">
            GitHub:
            [https://github.com/Calterat/artfuldodger](https://github.com/Calterat/artfuldodger){" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WeatherDashboard}
          alt="Work Day Scheduler"
        />

        <Carousel.Caption>
          <h3>Weather Dashboard</h3>
          <p>
            This application uses open weather's server-side API's to display
            current weather and also a 5-day forcast.
          </p>
          <p className="deployed-site-link">
            Deployed Application:
            [https://veta583518.github.io/WeatherDashboard/](https://veta583518.github.io/WeatherDashboard/)
          </p>
          <p className="repo-link">
            GitHub:
            [https://github.com/veta583518/WeatherDashboard](https://github.com/veta583518/WeatherDashboard)
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
