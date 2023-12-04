import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  CardPart,
  DescBe,
  DescTrain,
  LayCardPart,
  LayoutPartner,
  TextBe,
  TextBeBold,
  TitleTrain,
  CardPart2,
  CardPart3,
} from "./HomepageElement";

const BePartner = ({ partner }) => {
  return (
    <div>
      <LayoutPartner>
        <TextBe>Be Partner with </TextBe> <TextBeBold> Stellar</TextBeBold>
        <DescBe>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor non
          egestas sed vitae leo. Vitae <br></br>
          ultricies commodo, lacus fringilla sit varius. Ligula ac leo mollis
          habitasse tincidunt eget viverra.
        </DescBe>
        <LazyLoadComponent>
          <LayCardPart id={partner}>
            <CardPart>
              <TitleTrain>Own a Gym</TitleTrain>
              <DescTrain>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                non egestas sed vitae leo.
              </DescTrain>
            </CardPart>
            <CardPart2>
              <TitleTrain>Corporate Membership</TitleTrain>
              <DescTrain>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                non egestas sed vitae leo.
              </DescTrain>
            </CardPart2>
            <CardPart3>
              <TitleTrain>Brand Partnership</TitleTrain>
              <DescTrain>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                non egestas sed vitae leo.
              </DescTrain>
            </CardPart3>
          </LayCardPart>
        </LazyLoadComponent>
      </LayoutPartner>
    </div>
  );
};

export default BePartner;
