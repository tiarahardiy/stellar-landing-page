import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import HeaderMerchant from "../components/header/HeaderMerchant";
import DownloadApp from "../components/homepage/DownloadApp";
import HeroMerchant from "../components/merchant/HeroMerchant";
import OurMerchant from "../components/merchant/OurMerchant";
import RegisterMerchant from "../components/merchant/RegisterMerchant";
import Sidebar from "../components/sidebar/Sidebar";

const Merchant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderMerchant toggle={toggle} />
      <HeroMerchant />
      <OurMerchant />
      <RegisterMerchant />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Merchant;
