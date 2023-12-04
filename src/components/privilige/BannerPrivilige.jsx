import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import Banner1 from "../assets images/Banner.webp";
import Banner2 from "../assets images/Banner2.webp";
import {
  BannerBlueCard,
  BannerGreenCard,
  ContainerBanner,
  TextBold,
  Text3,
} from "./PriviligeElement";

const BannerPrivilige = () => {
  return (
    <div>
      <LayoutMt40>
        <div className="row">
          <div className="col-md-6">
            <BannerBlueCard>
              <TextBold> Woman Warrior Run 2023</TextBold>
              <Text3>
                Get Free 1 Regular Training Package. Buy 1 Regular Training
                Package - 8 Sessions
              </Text3>
            </BannerBlueCard>
          </div>
          <div className="col-md-6">
            <BannerGreenCard>
              <TextBold> Woman Warrior Run 2023</TextBold>
              <Text3>
                Get Free 1 Regular Training Package. Buy 1 Regular Training
                Package - 8 Sessions
              </Text3>
            </BannerGreenCard>
          </div>
        </div>

        {/* <ContainerBanner>
          <a href="https://www.w3schools.com">
            <img
              src={Banner1}
              alt="Stellar Image"
              className="img-fluid"
              lazy="loading"
            />
          </a>
          <a href="https://www.w3schools.com">
            <img
              src={Banner2}
              alt="Stellar Image"
              className="img-fluid"
              lazy="loading"
            />
          </a>
        </ContainerBanner> */}
      </LayoutMt40>
    </div>
  );
};

export default BannerPrivilige;
