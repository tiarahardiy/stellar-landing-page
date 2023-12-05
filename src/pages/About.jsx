import React, { useState } from "react";
import HeroAbout from "../components/about/HeroAbout";
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Section4 from "../components/about/Section4";
import Footer from "../components/footer/Footer";
import HeaderAbout from "../components/header/HeaderAbout";
import DownloadApp from "../components/homepage/DownloadApp";
import InfoHero from "../components/homepage/InfoHero";
// import Instagram from '../components/homepage/Instagram';
import Sidebar from "../components/sidebar/Sidebar";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderAbout toggle={toggle} />
      <HeroAbout />
      <Section2 />
      <Section3 />
      <Section4 />
      <InfoHero />
      <DownloadApp />
      {/* <Instagram /> */}
      <Footer />
    </div>
  );
};

export default About;
