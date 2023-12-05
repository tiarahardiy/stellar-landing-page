import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LayoutFooter = styled.div`
  padding: 40px 90px 24px 80px;
  margin-top: 88px;
  background-color: #202020;

  @media screen and (max-width: 768px) {
    padding: 40px 45px;
  }
`;

export const LayoutMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-top: 24px;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeLogo = styled(LinkR)`
    font-weight: 600;
    font-size: 12px;
    color: #121212;
    text-decoration:none;
    cursor:pointer
    justify-self: flex-start;
    align-items:center;
    cursor:pointer;
    display:flex;

    @media screen and (max-width: 768px) {
        padding-top:10px;
    }
`;

export const TextLogo = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const TextP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.88);
  padding-top: 8px;
  padding-leftt: 5px;
  text-align: end;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextRight = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.88);
  padding-top: 8px;
  padding-left: 5px;
  text-align: start;
`;

export const TitleFooter = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  padding-bottom: 16px;
  text-align: start;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

export const TitleFooterSosMed = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  padding-bottom: 16px;
  text-align: end;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Pages = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  flex-direction: column;
  padding-bottom: 24px;
  cursor: pointer;
`;

export const LayoutIcons = styled.div`
    display:flex;
    flex-direction:row:
    gap:20px;
    justify-content: end;
    padding-bottom:24px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }

`;

export const BorderLine = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  margin-top: 80px;
`;

export const FooterEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextCopyright = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.88);
  flex-direction: column;
  padding-top: 24px;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextCopyrightLink = styled(LinkR)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.88);
  flex-direction: row;
  padding-top: 18px;
  letter-spacing: 1px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Oval = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  margin-top: 24px;
  background: #ffffff;
`;
