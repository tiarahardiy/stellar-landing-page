import React from "react";
import {
  LayoutImgPriv,
  LayoutPrivilige,
  LayoutTextPrivilige,
  TitlePriv,
  TitlePrivBold,
  DescPriv,
  ButtonPrivilige,
} from "./HomepageElement";
import ImgPriv1 from "../assets images/privilige1.webp";
import ImgPriv2 from "../assets images/privilige2.webp";
import ImgPriv3 from "../assets images/privilige3.webp";
import ImgPriv4 from "../assets images/priv6.jpeg";

const Privilige = () => {
  return (
    <div>
      <LayoutPrivilige>
        <LayoutTextPrivilige>
          <div>
            <TitlePriv>Get More</TitlePriv>
            <TitlePrivBold> Privilige</TitlePrivBold>
            <TitlePriv> as Stellarian</TitlePriv>
            <DescPriv>
              Exclusively for Stellar Powerhouse Surabaya members, get benefits{" "}
              <br></br>
              in the form of discounts or points at some of our merchants.
            </DescPriv>
          </div>
          <ButtonPrivilige
            href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Privilige
          </ButtonPrivilige>
        </LayoutTextPrivilige>
        <LayoutImgPriv>
          <img src={ImgPriv1} className="img-privilige" lazy="loading" alt="" />
          <img src={ImgPriv2} className="img-privilige" lazy="loading" alt="" />
          <img src={ImgPriv3} className="img-privilige" lazy="loading" alt="" />
          <img src={ImgPriv4} className="img-privilige" lazy="loading" alt="" />
        </LayoutImgPriv>
      </LayoutPrivilige>
    </div>
  );
};

export default Privilige;
