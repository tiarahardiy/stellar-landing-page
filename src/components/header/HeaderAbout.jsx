import React, { useState, useEffect } from "react";
import {
  HomeLogo,
  NavbarContainer,
  SignIn,
  TextNav,
  MobileIcon,
  TextNavActive,
} from "./HeaderElement";
import logo from "../../../src/components/assets images/LogoStellar.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import { ButtonJoin } from "../homepage/HomepageElement";

const HeaderAbout = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg justify-content-end bg-white fixed-top">
        <NavbarContainer>
          <SignIn
            href="https://backend.v3.gostellar.id/site/join"
            target="_blank"
            rel="noreferrer noopener"
            className="justify-content-end"
          >
            Join us
          </SignIn>
          <SignIn className="d-none">|</SignIn>
          <SignIn className="d-none">Sign Up</SignIn>
        </NavbarContainer>
      </nav>
      <nav className="navbar navbar-expand-lg justify-content-between bg-light p-3  fixed-top navbar-margin-top">
        <HomeLogo to="/">
          <img
            src={logo}
            alt="logo stellar"
            lazy="loading"
            className="logo-img align-items-center"
          />
        </HomeLogo>
        <MobileIcon onClick={toggle}>
          <HiOutlineBars3 />
        </MobileIcon>
        <div className="d-none d-sm-block">
          <ul className="navbar-nav">
            <li nav-item>
              <TextNavActive to="/about">About</TextNavActive>
            </li>
            <li nav-item>
              <TextNav to="/location">Location</TextNav>
            </li>
            <li nav-item>
              <TextNav to="/training">Training</TextNav>
            </li>
            <li nav-item>
              <TextNav to="/success-story">Success Story</TextNav>
            </li>
            <li nav-item>
              <TextNav to="/privilige">Privilige</TextNav>
            </li>
            <li nav-item>
              <TextNav to="/career">Career</TextNav>
            </li>
            {/* <li nav-item>
              <TextNav to="/merchant">Merchant</TextNav>
            </li> */}
          </ul>
        </div>
        <div className="d-flex d-none d-sm-block">
          <ButtonJoin
            href="https://backend.v3.gostellar.id/admin"
            target="_blank"
            rel="noreferrer noopener"
          >
            Login
          </ButtonJoin>
        </div>
      </nav>
    </div>
  );
};

export default HeaderAbout;
