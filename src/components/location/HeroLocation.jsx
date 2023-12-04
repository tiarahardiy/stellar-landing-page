import React from "react";
import { Text1, Text2, Text3, TextBold } from "../homepage/HomepageElement";
import { HeroLoc } from "./LocationElement";

const HeroLocation = () => {
  return (
    <div>
      <HeroLoc>
        <Text1>Stellar Powerhouse</Text1>
        <Text2>
          Find our <TextBold>Playground</TextBold>
        </Text2>
        <Text3> in several City!</Text3>
      </HeroLoc>
    </div>
  );
};

export default HeroLocation;
