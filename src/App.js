import React, { useState } from "react";
import About from "./components/About/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-jquery-plugin";
import Popper from "popper.js";
import Navi from "./components/Nav/Nav";
//import Portfolio from "./components/Portfolio/Portfolio";
import CarouselContainer from "./components/Portfolio/Portfolio";
// import Footer from "./components/Footer";
import ContactForm from "./components/Contact/Contact";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Navi
      // setCurrentPage={setCurrentPage} currentPage={currentPage}
      ></Navi>
      <main>
        <div>
          {/* <ContactForm /> */}
          <CarouselContainer></CarouselContainer>
          {/* <About></About> */}
        </div>
      </main>
    </div>
  );
}

export default App;
