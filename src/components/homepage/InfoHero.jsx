import React from "react";
import {
  ButtonJoin,
  Layout,
  TextDesc,
  TextInfo,
  TitleInfo,
} from "./HomepageElement";
import IconMap from "../assets images/fa-solid_map-marked-alt.png";
import IconGym from "../assets images/map_gym.png";
import IconChart from "../assets images/fa6-solid_chart-area.png";

const InfoHero = () => {
  return (
    <div>
      <Layout>
        <div className="row d-flex justify-content-between ">
          <div className="col-md-10">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-4">
                <TitleInfo>
                  <img src={IconMap} className="mb-4" alt="" lazy="loading" />
                  <TextInfo>Available at 7 cities!</TextInfo>
                </TitleInfo>
                <TextDesc>
                  Visit us at Surabaya, Jakarta, Malang, Jember, Denpasar,
                  Kediri, dan Taipei
                </TextDesc>
              </div>

              <div className="col-md-3 ">
                <TitleInfo>
                  <img src={IconGym} className="mb-4" alt="" lazy="loading" />
                  <TextInfo>Training Services</TextInfo>
                </TitleInfo>
                <TextDesc>
                  Choose your training! Private, Regular, or Others Training.
                </TextDesc>
              </div>

              <div className="col-md-3">
                <TitleInfo>
                  <img src={IconChart} className="mb-4" alt="" lazy="loading" />
                  <TextInfo>Member Growth</TextInfo>
                </TitleInfo>
                <TextDesc>
                  More than 500.000 peoples join Stellar Powerhouse member.
                </TextDesc>
              </div>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center button-join-flex ">
            <ButtonJoin
              href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
              target="_blank"
              rel="noreferrer noopener"
            >
              Join Now
            </ButtonJoin>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default InfoHero;
