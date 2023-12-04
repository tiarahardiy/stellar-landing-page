import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  ButtonGet,
  HeroBg,
  Text1,
  Text2,
  Text3,
  TextBold,
} from "./HomepageElement";

const Hero = ({ hero }) => {
  return (
    <div>
      <LazyLoadComponent effect="blur">
        <HeroBg id={hero}>
          <div>
            <Text1>Stellar Powerhouse</Text1>
            <Text2>The First Premium</Text2>
            <Text3>
              <TextBold>Calisthenics</TextBold> Body Shaping.
            </Text3>

            <ButtonGet
              href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
              target="_blank"
              rel="noreferrer noopener"
            >
              Get Start
            </ButtonGet>
          </div>
        </HeroBg>
      </LazyLoadComponent>
    </div>
  );
};

export default Hero;
