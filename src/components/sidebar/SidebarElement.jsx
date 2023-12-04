import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1500;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(HiXMark)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #121212;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  trasition: 0.2s ease-in-out;
  text-decoration: none;
  color: #121212;
  cursor: pointer;

  &:hover {
    color: #2ebaf8;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLinkActive = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  trasition: 0.2s ease-in-out;
  text-decoration: none;
  color: red;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    color: #2ebaf8;
    transition: 0.2s ease-in-out;
  }
`;
