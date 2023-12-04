import React from "react";
import { LayoutMt60 } from "../GlobalElement";
import {
  Container,
  ContainerText,
  ContainerTextStory,
  TextNameBold,
  TextMember,
  TextDescStory,
} from "./SuccessStoryElement";
import Img from "../assets images/ss-image.webp";
import Petik from "../assets images/petik.png";
import { TextSs, TextSsBold } from "../homepage/HomepageElement";

const HeroStory = () => {
  return (
    <div>
      <LayoutMt60>
        <Container>
          <div>
            <img
              src={Img}
              alt="Stellar Image"
              className="img-fluid"
              lazy="loading"
            />
          </div>
          <ContainerTextStory>
            <img src={Petik} className="petik" alt="" lazy="loading" />
            <ContainerText>
              <TextNameBold>Pollyana Alexander Setiawan</TextNameBold>
              <TextMember>Member Since 20 Sep 2020</TextMember>
              <span>
                <TextSsBold>Success</TextSsBold>
                <TextSs>Story</TextSs>
              </span>
              <TextDescStory>
                I've been training at Stellar Powerhouse for almost 2 years. I
                enjoy it because I get the results especially when I decide to
                consistently train. My family is a family that easily gains
                weight, I didn't really believe it at first. But the
                consistency, coach Stellar and the movement I did right provided
                optimal results."
              </TextDescStory>
            </ContainerText>
          </ContainerTextStory>
        </Container>
      </LayoutMt60>
    </div>
  );
};

export default HeroStory;
