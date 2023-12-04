import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 60px 16px 0;
  background: #fffff;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 16px 15px 16px 0;
  }
`;

export const SignIn = styled.a`
  font-weight: 600;
  font-size: 12px;
  color: #121212;
  text-decoration: none;
  cursor: pointer;
`;

export const HomeLogo = styled(LinkR)`
    
    color: #121212;
    text-decoration:none;
    cursor:pointer
    // justify-self: flex-end;
    align-items:center;
    cursor:pointer;
    display:flex;
    margin-left:50px;
  

    @media screen and (max-width: 768px) {
        padding-top:10px;
        margin-left:5px
    }
`;
export const TextLogo = styled.h1`
  font-weight: 800;
  font-size: 18px;
  background: linear-gradient(135deg, #1bb7fc 0%, #1b83fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const TextNav = styled(LinkR)`
  font-weight: 400;
  font-size: 14px;
  color: #424242;
  text-decoration: none;
  cursor: pointer;
`;
export const TextNavActive = styled(LinkR)`
  font-weight: 800;
  font-size: 14px;
  color: #121212;
  text-decoration: none;
  cursor: pointer;
`;
export const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ebeaea;
  border-radius: 30px;
`;

export const InputSearch = styled.input`
  border: none;
  outline: none;
  width: 120px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: black;
    display: block;
    position: absolute;
    right: 0;
    align-items: center;
    margin-right: 10px;
    transform: translated(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
