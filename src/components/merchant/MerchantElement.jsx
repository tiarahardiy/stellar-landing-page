import styled from "styled-components";
import HeroBgImg from "../assets images/merchant.webp";

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
    padding: 500px 24px 0 24px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 302px;
  height: 158px;
  background: #ffffff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const Profile = styled.div`
  padding: 10px 10px;
  // gap: 10px;
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.backgroundColor || "#0683c2"}; /* Default color is #0683c2 */
  border-radius: 40px;
`;

export const ProfilePink = styled.div`
  padding: 10px 8px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: #f900bf;
  border-radius: 40px;
`;

export const ProfileOrange = styled.div`
  padding: 10px 8px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: #f27d06;
  border-radius: 40px;
`;

export const ProfileGreen = styled.div`
  padding: 10px 8px;
  gap: 10px;
  width: 40px;
  height: 40px;
  background: #36ae7c;
  border-radius: 40px;
`;

export const TextProfile = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const MemberMerchant = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const NameMerchant = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #121212;
`;

export const MerchantLoc = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #424242;
`;

export const TextDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #424242;
`;
