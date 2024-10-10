import React from "react";
import { Element } from "react-scroll";
import Hero from "./sections/hero";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";
import About from "./sections/about";
import Contact from "./sections/contact";

const App = () => {
  return (
    <div>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
