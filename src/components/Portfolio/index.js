import { Carousel } from "bootstrap";
import React from "react";
import WorkDayScheduler from "../../assets/WorkDayScheduler_Screenshot.jpg";
import Pokefinder from '../../assets/Pokefinder-Screenshot.png'
import OffBeatenPath from '../../assets/Off-the-Beaten-Path'

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
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pokefinder}
          alt="Pokefinder"
        />

        <Carousel.Caption>
          <h3>Pokefinderr</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WorkDayScheduler}
          alt="Work Day Scheduler"
        />

        <Carousel.Caption>
          <h3>Work Day Scheduler</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Carousel.Item>
      <img
      className="d-block w-100"
      src={}
    </Carousel.Item>
    <Carousel.Caption>
      <h3>Artful Dodgerr</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    
  );
}

render(<ControlledCarousel />);

export default Portfolio;
