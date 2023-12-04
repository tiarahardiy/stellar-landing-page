import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/location">Location</SidebarLink>
          <SidebarLink to="/training">Training</SidebarLink>
          <SidebarLink to="/success-story">Success Story</SidebarLink>
          <SidebarLink to="/privilige">Privilige</SidebarLink>
          <SidebarLink to="/career">Career</SidebarLink>
          <SidebarLink to="/merchant">Merchant</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
