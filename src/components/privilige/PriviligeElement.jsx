import styled from "styled-components";
import HeroBgImg from "../assets images/priviligehero.webp";
import BannerBlue from "../assets images/Banner.svg";
import BannerGreen from "../assets images/BannerGreen.svg";

export const HeroPriv = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)),
    url(${HeroBgImg});
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 560px 80px 40px;
  height: 100%;
  gap: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    padding: 200px 24px 0 24px;
  }
`;

export const Text1 = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;

export const Text2 = styled.h1`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
`;

export const TextBold = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  color: #ffffff;
`;

export const Text3 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const BannerBlueCard = styled.div`
  background: url(${BannerBlue});
  padding: 32px;
`;

export const BannerGreenCard = styled.div`
  background: url(${BannerGreen});
  padding: 32px;
`;
