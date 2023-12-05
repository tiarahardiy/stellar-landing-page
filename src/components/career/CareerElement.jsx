import styled from "styled-components";
import HeroBgImg from "../assets images/jobdetail.webp";
import BgJob from "../assets images/res_sec2.webp";
import { Link as LinkR } from "react-router-dom";

export const HeroCareerImg = styled.div`
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
    padding: 560px 24px 0 24px;
  }
`;

export const TextJobTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #121212;
`;

export const CardJob = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
  gap: 32px;
  min-width: 0;
  height: 114px;
  background: #ffffff;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    background: linear-gradient(
        180deg,
        rgba(18, 18, 18, 0.24) 0%,
        rgba(18, 18, 18, 0.8) 100%
      ),
      url(${BgJob});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    flex-direction: column;
    height: 268px;
  }
`;

export const TitleJob = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #121212;

  @media screen and (max-width: 768px) {
    color: #ffffff;
  }
`;

export const TextBranch = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #424242;

  @media screen and (max-width: 768px) {
    color: #ffffff;
  }
`;

export const ButtonApply = styled(LinkR)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 40px 16px 41px;
  gap: 10px;
  width: 160px;
  height: 48px;
  background: #2ebaf8;
  border-radius: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #121212;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  text-decoration: none;

  :hover {
    background: #ffffff;
  }
`;

export const ButtonApplyBlack = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 40px 16px 41px;
  gap: 10px;
  width: 160px;
  height: 48px;
  background: black;
  border-radius: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  box-shadow: 10px 24px 54px rgba(15, 13, 35, 0.04);
  text-decoration: none;
  cursor: pointer;

  :hover {
    background: #ffffff;
  }
`;
export const PremiumLayout = styled.div`
  display: flex;
`;

export const TextDetail = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #424242;
`;
