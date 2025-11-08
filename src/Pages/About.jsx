import React from "react";
import AboutMe from "../components/About/AboutMe";
import TeamAbout from "../components/About/TeamAbout";
import AboutHero from "../components/About/AboutHero";
import FAQAbout from "../components/About/FAQAbout";

function About() {
  return (
    <div>
      <AboutHero />
      <AboutMe />
      <TeamAbout />
      <FAQAbout />
    </div>
  );
}

export default About;
