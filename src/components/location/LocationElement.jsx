import styled from "styled-components";
import HeroBgImg from "../assets images/bgloc.webp";

export const HeroLoc = styled.div`
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
    padding: 360px 24px 40px;
  }
`;

export const CityLayout = styled.div`
  margin-bottom: 45px;
`;

export const TextCity = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #121212;
`;

export const LocLayout = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    url(${HeroBgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 464px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 336px;
  }
`;

export const TextSch = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #ffffff;
`;

export const TextSchBold = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;

export const MBottom = styled.div`
  margin-bottom: 160px;
`;

export const LocLayout1City = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    url(${HeroBgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 640px;
`;

export const MBottom300 = styled.div`
  margin-bottom: 330px;
`;
