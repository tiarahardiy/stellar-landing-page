import React from "react";
import { LayoutIG, TitleIG } from "./HomepageElement";
// import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Instagram = () => {
  return (
    <div>
      <LayoutIG>
        <TitleIG>Instagram Galery</TitleIG>
        {/* <InstagramFeed
          token="IGQVJVUk9RMl9BX2xzTXM4ZA0xucV9acVdxdE5mZAGFndC1DaXlOQUFDR1pYd3BlbVhVYy01TUNBMXVfQ2VoMGNkQk53VklQRnhxcjRmc01Hb3p1azI5UVdlMXdtVVBEVERJa3hwTkM4aHVGTWotbUExVgZDZD"
          counter="18"
        /> */}
      </LayoutIG>
    </div>
  );
};

export default Instagram;
