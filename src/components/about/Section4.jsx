import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import {
  CardImage1,
  CardImage2,
  CardImage3,
  CardImage4,
  CardImage5,
  CardImage6,
  LayoutSection4,
  TextSec4,
} from "./AboutElement";

const Section4 = () => {
  return (
    <div>
      <LayoutMt40>
        <LayoutSection4>
          <CardImage1>
            <TextSec4>Experienced Calisthenics enthusiast coaches.</TextSec4>
          </CardImage1>
          <CardImage2>
            <TextSec4>Low-cost High-profit Small Medium business.</TextSec4>
          </CardImage2>
          <CardImage3>
            <TextSec4>
              Uniquely proven method for fatloss and bodyshaping.
            </TextSec4>
          </CardImage3>
          <CardImage4>
            <TextSec4>Standardized and Centralized programs.</TextSec4>
          </CardImage4>
          <CardImage5>
            <TextSec4>None other institutions uses the same method.</TextSec4>
          </CardImage5>
          <CardImage6>
            <TextSec4>Huge and sustainable market.</TextSec4>
          </CardImage6>
        </LayoutSection4>
      </LayoutMt40>
    </div>
  );
};

export default Section4;
