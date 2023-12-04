import React from "react";
import {
  LayoutFooter,
  TextP,
  TextRight,
  ContentFooter,
  HomeLogo,
  TextLogo,
  TitleFooter,
  Pages,
  LayoutIcons,
  FooterEnd,
  BorderLine,
  TextCopyright,
  TextCopyrightLink,
  LayoutMobile,
  TitleFooterSosMed,
} from "./FooterElement";
import logo from "../../../src/assets/logostellar.png";
import { BsFacebook, BsLine } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Apple from "../assets images/apple.png";
import Google from "../assets images/google.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <LayoutFooter>
          <ContentFooter>
            <div>
              <HomeLogo to="/">
                <img src={logo} alt="logo stellar" lazy="loading" />
                <TextLogo>Stellar</TextLogo>
              </HomeLogo>
              <TextRight>
                Jl. Kupang Indah VIII No.1 Dukuh Kupang <br></br>
                Kec. Dukuh pakis, Kota SBY, <br></br>
                Jawa Timur 60189
              </TextRight>
              <TextRight>
                Opening hours : <br></br>
                Mon - Fri : 06.00 - 22.00 | Sat : 06.00 - 12.00
              </TextRight>
            </div>
            <LayoutMobile>
              <div>
                <div className="list-group">
                  <TitleFooter>Explore</TitleFooter>
                  <Pages>Branch</Pages>
                  {/* <Pages
                    href="https://api.whatsapp.com/send?phone=62819894141"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Franchise
                  </Pages> */}
                  <Pages
                    href="https://api.whatsapp.com/send?phone=62811333600"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Partnership
                  </Pages>
                  <Pages
                    href="https://api.whatsapp.com/send?phone=62819894141"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Privilige
                  </Pages>
                </div>
              </div>
              <div className="ms-5">
                <div className="list-group">
                  <TitleFooter>Company</TitleFooter>
                  <Pages
                    href="/about"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    About Us
                  </Pages>
                  <Pages
                    href="/career"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Careers
                  </Pages>
                </div>
              </div>
              <div className="ms-5">
                <div className="list-group">
                  <TitleFooter>Supports</TitleFooter>
                  <Pages
                    href="https://linktr.ee/stellarpowerhouse"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Contact Us
                  </Pages>
                </div>
              </div>
            </LayoutMobile>

            <div>
              <div className="list-group">
                <TitleFooterSosMed>Our Social Media</TitleFooterSosMed>
                <LayoutIcons>
                  <a
                    href="https://id-id.facebook.com/stellar.powerhouse/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icons"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/stellar.powerhouse/?hl=id"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icons"
                  >
                    <RiInstagramFill />
                  </a>
                  <a
                    href="dev@gostellar.id"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icons"
                  >
                    <MdEmail />
                  </a>
                  <a
                    href="https://liff.line.me/1645278921-kWRPP32q/?accountId=kbz7220v"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="icons"
                  >
                    <BsLine />
                  </a>
                </LayoutIcons>
                <TextP>
                  Surabaya/Malang: 0852 7755 4141 <br></br>
                  Jember/Denpasar/Kediri: 081 1147 4141<br></br>
                  Jakarta: 082 2776 64141
                </TextP>
                <LayoutIcons>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ms-2"
                  >
                    <img src={Google} className="" alt="" lazy="loading" />
                  </a>
                  <a
                    href="https://apps.apple.com/id/app/stellar-pass/id1245561801?l=id"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ms-2"
                  >
                    <img src={Apple} className="" alt="" lazy="loading" />
                  </a>
                </LayoutIcons>
              </div>
            </div>
          </ContentFooter>
          <BorderLine></BorderLine>
          <FooterEnd>
            <TextCopyright>Copyright 2022. All Right Reserved</TextCopyright>
            <div className="d-flex ">
              <TextCopyrightLink to="/privacy-policy">
                Privacy Policy
              </TextCopyrightLink>
            </div>
          </FooterEnd>
        </LayoutFooter>
      </footer>
    </div>
  );
};

export default Footer;
