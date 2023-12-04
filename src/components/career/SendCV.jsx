import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import Image from "../assets images/coach.webp";
import Image2 from "../assets images/coach2.webp";
import { ButtonApplyBlack, TextJobTitle, TextDetail } from "./CareerElement";

const SendCV = () => {
  return (
    <div>
      <LayoutMt40>
        <div className="row">
          <div className="col-md-4 layout-cv">
            <TextJobTitle>Send Your CV</TextJobTitle>
            <TextDetail>
              Line: @stellar.powerhouse <br></br>
              Email: stellar.powerhouse@gmail.com<br></br>
              Alamat: Jl.Kupang Indah 8/1 Surabaya<br></br>
              WA: 08113336000
            </TextDetail>
            <ButtonApplyBlack className="flex-button">
              Apply Now
            </ButtonApplyBlack>
          </div>
          <div className="col-md-4 d-none d-sm-block">
            {" "}
            <img
              src={Image}
              alt="Stellar Image"
              lazy="loading"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4  d-none d-sm-block">
            {" "}
            <img
              src={Image2}
              alt="Stellar Image"
              lazy="loading"
              className="img-fluid"
            />
          </div>
        </div>
      </LayoutMt40>
    </div>
  );
};

export default SendCV;
