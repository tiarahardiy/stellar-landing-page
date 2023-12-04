import React, { useState } from "react";
import HeroCareer from "../components/career/HeroCareer";
import JobList from "../components/career/JobList";
//import SectionPremium from "../components/career/SectionPremium";
import HeaderCareer from "../components/header/HeaderCareer";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderCareer toggle={toggle} />
      <HeroCareer />
      <JobList />
      {/* <SectionPremium /> */}
      <Footer />
    </div>
  );
};

export default Career;
