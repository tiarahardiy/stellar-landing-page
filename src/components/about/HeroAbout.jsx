import React from "react";
import {
  LayoutAbout,
  TextTitle,
  TextTitleBold,
  TextWhat,
  TextDesc,
  ButtonVideo,
  ListButton,
  Button,
} from "./AboutElement";
import HeroAboutImg from "../assets images/heroabout.webp";
import { BsPlayCircle } from "react-icons/bs";

const HeroAbout = () => {
  return (
    <div>
      <LayoutAbout>
        <div>
          <TextWhat>What is Stellar?</TextWhat>
          <TextTitle>Stellar Powerhouse is</TextTitle>
          <TextTitleBold>
            {" "}
            World’s 1st Premium <br></br>Calisthenics Training
          </TextTitleBold>
          <TextTitle> that focused on </TextTitle>
          <br></br>
          <TextTitle>bespoke body-shaping program</TextTitle>

          <TextDesc>
            Calisthenics is a form of exercise consisting of various sports
            exercises. Often use a rhythm <br></br>
            of movement, generally without the use of weight equipment but using
            your own body weight <br></br>
            to build muscle. Calisthenics has many benefits and is comfortable
            to do and can <br></br>
            be adapted to our own abilities starting from beginners,
            intermediate or higher levels.<br></br>
          </TextDesc>

          <ListButton>
            <Button>Get Start</Button>
            <ButtonVideo
              href="https://www.youtube.com/watch?v=L-6-G_9vRNA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsPlayCircle className="icon-video" /> Wacth Video
            </ButtonVideo>
          </ListButton>
        </div>
        <div>
          <img
            src={HeroAboutImg}
            lazy="loading"
            alt="stellar"
            className="img-fluid"
          />
        </div>
      </LayoutAbout>
    </div>
  );
};

export default HeroAbout;
