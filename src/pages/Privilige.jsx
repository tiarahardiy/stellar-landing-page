import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import HeaderPrivilige from "../components/header/HeaderPrivilige";
import DownloadApp from "../components/homepage/DownloadApp";
import Instagram from "../components/homepage/Instagram";
//import BannerPrivilige from '../components/privilige/BannerPrivilige';
import HeroPrivilige from "../components/privilige/HeroPrivilige";
import Sidebar from "../components/sidebar/Sidebar";
import OurMerchant from "../components/merchant/OurMerchant";

const Privilige = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderPrivilige toggle={toggle} />
      <HeroPrivilige />
      <OurMerchant />
      <DownloadApp />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Privilige;
