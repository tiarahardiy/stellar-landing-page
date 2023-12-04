import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import {
  LayoutSection,
  Card1,
  Card2,
  TitleSec2,
  DescSec2,
} from "./AboutElement";

const Section2 = () => {
  return (
    <div>
      <LayoutMt40>
        <LayoutSection>
          <Card1>
            <TitleSec2>Professional</TitleSec2>
            <DescSec2>
              Stellar Powerhouse coaching are standardized procedure thus the
              training become efficient and sufficient to the member's
              necessities. The coach here are trained more than 2 months to rule
              the roots of Calisthenics movement and comprehend the meticulous
              training on provisional support to come injuries.
            </DescSec2>
          </Card1>
          <Card2>
            <TitleSec2>Result Driven</TitleSec2>
            <DescSec2>
              All the trainings are supported by coaches thereby the members
              hardwork pays off. Our intentions is to support the greater
              possibilities to reach the best transformation of each
              individuals. The member's development are always our top priority.
              Get workout experience and growth with Stellar Pass now.
            </DescSec2>
          </Card2>
        </LayoutSection>
      </LayoutMt40>
    </div>
  );
};

export default Section2;
