import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import { ButtonTrain } from "../homepage/HomepageElement";
import {
  LocLayout,
  MBottom,
  TextSch,
  TextSchBold,
} from "../location/LocationElement";
import { TextJobTitle } from "./CareerElement";

const SectionPremium = () => {
  return (
    <div>
      <LayoutMt40>
        <TextJobTitle>#1 Calisthenics Premium Gym</TextJobTitle>
        <div className="row">
          <div className="col-md-6 mt-3">
            <LocLayout>
              <MBottom>
                <TextSch>Mon - Sat : 06.00 - 22.00</TextSch>
                <TextSch>Sun : Closed</TextSch>
              </MBottom>
              <div>
                <TextSchBold>West Surabaya Headquarter</TextSchBold>
                <TextSch>Jl. Kupang Indah VIII No.1, Dukuh Kupang</TextSch>
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd7fc0e5265f7bf:0x1aa8643af073f799?source=g.page.share/"
                  className="link-location"
                >
                  See Location
                </a>
              </div>
              <div className="margin-button">
                <ButtonTrain>Free Trial</ButtonTrain>
              </div>
            </LocLayout>
          </div>
          <div className="col-md-6 mt-3">
            <LocLayout>
              <MBottom>
                <TextSch>Mon - Sat : 06.00 - 22.00</TextSch>
                <TextSch>Sun : Closed</TextSch>
              </MBottom>
              <div>
                <TextSchBold>Jakarta Barat</TextSchBold>
                <TextSch>Jl. Pilar Mas Utama Kav. O No. 1A, RT.7/RW.3</TextSch>
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x2e69f70982a36adb:0x90bf2b650cee96a4?source=g.page.share"
                  className="link-location"
                >
                  See Location
                </a>
              </div>
              <div className="margin-button">
                <ButtonTrain>Free Trial</ButtonTrain>
              </div>
            </LocLayout>
          </div>
          <div className="col-md-6 mt-3">
            <LocLayout>
              <MBottom>
                <TextSch>Mon - Sat : 06:30 - 22:00</TextSch>
                <TextSch>Sun : Closed</TextSch>
              </MBottom>
              <div>
                <TextSchBold>Malang</TextSchBold>
                <TextSch>
                  Villa Puncak Tidar blok I no. 9B, Malang Regency, East Java
                  65151
                </TextSch>
                <a
                  href="https://goo.gl/maps/N2YPNa6Bm8pZL4fUA"
                  className="link-location"
                >
                  See Location
                </a>
              </div>
              <div className="margin-button">
                <ButtonTrain>Free Trial</ButtonTrain>
              </div>
            </LocLayout>
          </div>
          <div className="col-md-6 mt-3">
            <LocLayout>
              <MBottom>
                <TextSch>Mon - Sat : 06:30 - 22:00</TextSch>
                <TextSch>Sun : Closed</TextSch>
              </MBottom>
              <div>
                <TextSchBold>Taipei</TextSchBold>
                <TextSch>To Be Announced</TextSch>
                <a
                  href="https://id-id.facebook.com/stellar.powerhouse/"
                  className="link-location"
                >
                  See Location
                </a>
              </div>
              <div className="margin-button">
                <ButtonTrain>Free Trial</ButtonTrain>
              </div>
            </LocLayout>
          </div>
        </div>
      </LayoutMt40>
    </div>
  );
};

export default SectionPremium;
