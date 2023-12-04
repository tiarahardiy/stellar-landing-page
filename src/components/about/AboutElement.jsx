import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import res_sec1 from "../assets images/res_sec1.webp";
import res_sec2 from "../assets images/res_sec2.webp";
import train1 from "../assets images/train1.webp";
import train2 from "../assets images/train2.webp";
import regular1 from "../assets images/regular1.webp";
import regular2 from "../assets images/regular2.webp";

export const LayoutAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 80px;
  margin-top: 24px;
  margin-bottom: 40px;
  background-color: #fafafa;
  gap: 130px;

  @media screen and (max-width: 768px) {
    padding: 140px 24px;
  }
`;

export const TextWhat = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #0683c2;
`;

export const TextTitle = styled.span`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #121212;
  font-weight: 400;
`;

export const TextTitleBold = styled.span`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #121212;
  font-weight: 700;
`;

export const TextDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424242;
  margin-top: 16px;
`;

export const Button = styled(LinkR)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px 32px 16px 31px;
  width: 147px;
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
    border: 1px solid #121212;
  }
`;

export const ButtonVideo = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 20px;
  gap: 12px;
  width: 176px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #121212;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #121212;

  :hover {
    background: #121212;
    color: #ffffff;
  }
`;

export const ListButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 32px;
`;

//SECTION 2

export const LayoutSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card1 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 55.13%,
      rgba(18, 18, 18, 0.9) 100%
    ),
    url(pexels-victor-freitas-841130.jpg), url(${res_sec1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 320px 32px 32px;
  width: 100%;
  height: 476px;

  @media screen and (max-width: 768px) {
    padding: 180px 32px 32px;
  }
`;

export const Card2 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 55.13%,
      rgba(18, 18, 18, 0.9) 100%
    ),
    url(pexels-victor-freitas-841130.jpg), url(${res_sec2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 320px 32px 32px;
  width: 100%;
  height: 476px;

  @media screen and (max-width: 768px) {
    padding: 200px 32px 32px;
  }
`;

export const TitleSec2 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;

export const DescSec2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.88);
`;

//SECTION 3

export const LayoutSection3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextDesc16px = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #424242;
  padding-top: 16px;
  padding-bottom: 20px;
`;

export const TextList = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  color: #121212;
`;

export const ButtonBlack = styled(LinkR)`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  padding: 14px 32px;
  font-weight: 600;
  font-size: 14px;
  width: 131px;
  height: 48px;
  background: #121212;
  border-radius: 40px;
  text-decoration: none;
  color: #ffffff;

  :hover {
    background: #121212;
    color: #ffffff;
  }
`;

//SECTION 4

export const LayoutSection4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImage1 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${res_sec1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;
export const CardImage2 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${res_sec2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;
export const CardImage3 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${train1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;
export const CardImage4 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${train2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;
export const CardImage5 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${regular1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;
export const CardImage6 = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${regular2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  padding: 80px 24px 24px;
  width: 100%;
  height: 200px;
`;

export const TextSec4 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;
