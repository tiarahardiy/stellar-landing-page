import styled from "styled-components";
import image1 from "../assets images/train1.webp";

export const LayoutTrain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 160px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LayoutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-top: 170px;

  @media screen and (max-width: 768px) {
    align-items: start;
    margin-top: 10px;
  }
`;

export const TextTrain = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #121212;
`;

export const TextTitle = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 3px;
`;

export const TextDesc = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121212;
  text-align:center
`;

export const TextDescBold = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #121212;
`;

export const LayoutImg = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const LayoutImgMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`;

export const DivImg = styled.div`
  display: flex;
  flex-dirextion: row;

  @media screen and (max-width: 768px) {
    gap: 14px;
  }
`;

export const img1 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${image1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 414px;
`;

//REDESIGN CARD

