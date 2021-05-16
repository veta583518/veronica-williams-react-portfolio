import React, { useState } from "react";
import About from "./components/About/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-jquery-plugin";
import Popper from "popper.js";
import Navi from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  function renderPage() {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  }

  return (
    <div className="App">
      <Navi setCurrentPage={setCurrentPage}></Navi>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
