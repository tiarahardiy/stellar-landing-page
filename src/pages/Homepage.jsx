import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BePartner from "../components/homepage/BePartner";
import DownloadApp from "../components/homepage/DownloadApp";
import FreeTrial from "../components/homepage/FreeTrial";
import Hero from "../components/homepage/Hero";
import InfoHero from "../components/homepage/InfoHero";
// import Instagram from '../components/homepage/Instagram';
import OurTraining from "../components/homepage/OurTraining";
import Privilige from "../components/homepage/Privilige";
import SuccessStory from "../components/homepage/SuccessStory";
import Sidebar from "../components/sidebar/Sidebar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Hero />
      <InfoHero />
      <OurTraining />
      <Privilige />
      <SuccessStory />
      <BePartner />
      <FreeTrial />
      <DownloadApp />
      {/* <Instagram /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
