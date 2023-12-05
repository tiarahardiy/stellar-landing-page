import React, { useState } from "react";
import DetailSection from "../components/career/DetailSection";
import SendCV from "../components/career/SendCV";
import Footer from "../components/footer/Footer";
import HeaderCareer from "../components/header/HeaderCareer";
import Sidebar from "../components/sidebar/Sidebar";

const CareerDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderCareer toggle={toggle} />
      <DetailSection />
      <SendCV />
      {/* <SectionPremium /> */}
      <Footer />
    </div>
  );
};

export default CareerDetail;
