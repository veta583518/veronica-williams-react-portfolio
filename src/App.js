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
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="App bg-dark">
      <Navi setCurrentPage={setCurrentPage} currentPage={currentPage}></Navi>
      <main>
        <div>
          <About></About>
          <CarouselContainer></CarouselContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
