import React from "react";
import {
  BannerImage,
  ButtonFree,
  DescFree,
  LayoutFree,
  TextFree,
} from "./HomepageElement";

const FreeTrial = () => {
  return (
    <div>
      <LayoutFree>
        <BannerImage>
          <div>
            <TextFree>Start your Free Trial Today!</TextFree>
            <DescFree>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              non egestas sed vitae leo. Vitae ultricies commodo
            </DescFree>
          </div>
          <ButtonFree
            href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
            target="_blank"
            rel="noreferrer noopener"
          >
            Start Free Trial
          </ButtonFree>
        </BannerImage>
      </LayoutFree>
    </div>
  );
};

export default FreeTrial;
