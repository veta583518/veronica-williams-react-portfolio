import React from "react";
import About from "./components/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./components/Nav";

//import Footer from "./components/Footer";
//import Portfolio from "./components/Portfolio";
//import Contact from "./components/Contact";
//import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
