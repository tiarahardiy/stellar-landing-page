import styled from "styled-components";
import HeroBgImg from "../assets images/IMG_5311.jpg";
import Train1 from "../assets images/train1.webp";
import Train2 from "../assets images/train2.webp";
import Train3 from "../assets images/train3.webp";
import Train4 from "../assets images/train4.webp";
import BePart1 from "../assets images/bepartner1.webp";
import BePart2 from "../assets images/bepartner2.webp";
import BePart3 from "../assets images/bepartner3.webp";
import Start from "../assets images/startfree.webp";
import App from "../assets images/app.png";

//HERO

export const HeroBg = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${HeroBgImg});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 560px 80px 40px;
  margin-top: 50px;
  margin-bottom: 88px;

  @media screen and (max-width: 768px) {
    padding: 360px 24px 40px;
  }
`;

export const ButtonGet = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 147px;
  height: 48px;
  background: #2ebaf8;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #121212;
  margin-top: 25px;

  :hover {
    background: #ffffff;
  }
`;

export const Text1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 3px;
}
`;

export const Text2 = styled.h1`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
  letter-spacing: 3px;
`;

export const Text3 = styled.span`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
  letter-spacing: 3px;
`;

export const TextBold = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
  letter-spacing: 3px;
`;

//INFO HERO

export const Layout = styled.div`
  // display: flex;
  // flex-direction: row;
  align-items: center;
  padding: 40px 80px;

  background-color: #fafafa;
  // margin-top: 88px;

  @media screen and (max-width: 768px) {
    padding: 40px 80px;
  }
`;

export const TitleInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TextInfo = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #121212;
  align-items: center;
`;

export const TextDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #424242;
  margin-left: 38px;
`;
export const ButtonJoin = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px 32px 16px 31px;
  width: 130px;
  height: 48px;
  background: #121212;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;

  :hover {
    background: #ffffff;
    color: #121212;
  }
`;

//OUR TRAINING

export const LayoutTraining = styled.div`
  padding: 0 80px;
  margin-top: 88px;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const TextTrain = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #121212;
`;

export const LayoutCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Card1 = styled.div`
  // background-image: linear-gradient(
  //     180deg,
  //     rgba(18, 18, 18, 0) 33.99%,
  //     #121212 100%
  //   ),
  //   url(${Train1});
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  positin: relative;
  padding: 296px 32px 32px;
  width: 100%;
  height: 450px;
`;
export const Card2 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${Train2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 296px 32px 32px;
  width: 100%;
  height: 450px;
`;

export const Card3 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${Train3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 296px 32px 32px;
  width: 100%;
  height: 450px;
`;

export const Card4 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${Train4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 296px 32px 32px;
  width: 100%;
  height: 450px;
`;
export const TitleTrain = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const DescTrain = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.88);
  letter-spacing: 1px;
`;

export const ButtonTrain = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px 32px 16px 31px;
  width: 130px;
  height: 48px;
  background-color: #2ebaf8;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #121212;

  :hover {
    background: #ffffff;
    color: #121212;
  }
`;

//PRIVILIGE

export const LayoutPrivilige = styled.div`
  padding: 40px 80px;
  margin-top: 88px;
  background-color: #202020;

  @media screen and (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const LayoutTextPrivilige = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitlePriv = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const TitlePrivBold = styled.span`
  font-weight: 800;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const DescPriv = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
  margin-top: 16px;
  letter-spacing: 1px;
`;

export const ButtonPrivilige = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  width: 167px;
  height: 48px;
  background: #2ebaf8;
  border-radius: 40px;
  text-decoration: none;
  color: #121212;

  :hover {
    background: #ffffff;
    color: #121212;
  }
`;

export const LayoutImgPriv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 56px;
  justify-content: space-between;
  margin-top: 39px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

//SUCCESS STORY

export const LayoutStory = styled.div`
  padding: 40px 80px;
  margin-top: 88px;

  @media screen and (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const DescLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const TestiLayout = styled.div`
  flex-direction: column;
  gap: 42px;
`;

export const LayoutSS = styled.div`
  padding-left: 105px;
  padding-bottom: 24px;
`;

export const TextSsBold = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #121212;
`;

export const TextSs = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #121212;
  padding-left: 5px;
`;

export const DescSs = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #424242;
  letter-spacing: 1px;
  line-height: 150%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UserTesti = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  margin-top: 32px;
`;

export const UserName = styled.div`
  display: block;
`;

export const TextName = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #121212;
`;

export const TextMemb = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #aaaaaa;
  margin-top: 10px;
`;

export const StoryLayout = styled.div`
  padding-top: 72px;
`;
export const CardStory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 385px;
  height: 285x;
  background: #f9f9f9;
  border-radius: 16px;

  @media screen and (max-width: 768px) {
    width: 340px;
    height: 310px;
  }
`;

export const TextStory = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #272727;
  line-height: 150%;
`;

export const UserTestiSS = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  padding-top: 16px;

  @media screen and (max-width: 768px) {
    padding-top: 8px;
  }
`;

export const UserNameSS = styled.div`
  display: block;
`;

export const TextNameSS = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #121212;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TextMembSS = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

//BE PARTNER

export const LayoutPartner = styled.div`
  padding: 20px 80px;
  margin-top: 35px;

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
    margin-top: 10px;
  }
`;

export const LayCardPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 36px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardPart = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 21.35%,
      rgba(0, 0, 0, 0.3) 44.79%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${BePart1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 92px 24px 24px;
  width: 100%;
  height: 184px;
`;

export const CardPart2 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 21.35%,
      rgba(0, 0, 0, 0.3) 44.79%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${BePart3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 92px 24px 24px;
  width: 100%;
  height: 184px;
`;

export const CardPart3 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 21.35%,
      rgba(0, 0, 0, 0.3) 44.79%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${BePart2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 92px 24px 24px;
  width: 100%;
  height: 184px;
`;

export const TextBe = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #424242;
`;

export const TextBeBold = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #424242;
`;

export const DescBe = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424242;
  margin-top: 16px;
`;

//FREE TRIAL

export const LayoutFree = styled.div`
  padding: 40px 80px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
    margin-top: 10px;
  }
`;

export const BannerImage = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.4) 31.77%,
      rgba(0, 0, 0, 0) 49.48%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${Start});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 100%;
  height: 160px;

  @media screen and (max-width: 768px) {
    height: 232px;
    padding: 24px;
    flex-direction: column;
  }
`;

export const TextFree = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DescFree = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.88);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonFree = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  width: 170px;
  height: 48px;
  background: #ffffff;
  border-radius: 40px;
  text-decoration: none;
  color: #121212;

  :hover {
    background: #ffffff;
    color: #121212;
  }
`;

//DOWNLOAD APP

export const ImageApp = styled.div`
  display: flex;
  justify-content: end;
  z-index: 5;
`;

export const LayoutApp = styled.div`
  padding: 40px 80px;
  margin-top: 40px;
  // background-image: url(${App});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const InsideApp = styled.div`
  padding: 40px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #202020;
  justify-content: space-between;
  z-index: -1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextApp = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const DescApp = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;

export const AppPlaystore = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

//INSTAGRAM

export const LayoutIG = styled.div`
  padding: 20px 80px;
  margin-top: 30px;
  background: #fafafa;

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
    margin-top: 10px;
  }
`;

export const TitleIG = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: #121212;
  padding-bottom: 40px;
`;

export const ImageIG = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-between;
  gap: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
