import styled from "styled-components";

export const Layout = styled.div`
  padding: 40px 80px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const LayoutMt40 = styled.div`
  padding: 40px 80px;

  @media screen and (max-width: 768px) {
    padding: 25px 24px;
  }
`;

export const LayoutMt20 = styled.div`
  padding: 160px 80px 0 80px;

  @media screen and (max-width: 768px) {
    padding: 140px 24px;
  }
`;

export const LayoutMt60 = styled.div`
  padding: 200px 80px 40px 80px;

  @media screen and (max-width: 768px) {
    padding: 140px 24px;
  }
`;

export const LayoutGray = styled.div`
  padding: 120px 80px;
  background: #fafafa;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 25px 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 36px;
  line-height: 150%;
  color: #121212;
  font-weight: 700;
  text-align: center;
`;

export const TextDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424242;
  margin-top: 35px;
  text-align: justify;
`;
