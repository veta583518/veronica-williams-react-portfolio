import React from "react";
import About from "./components/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navi from "./components/Nav";
import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  return (
    <div className="App bg-dark">
      <Navi></Navi>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
