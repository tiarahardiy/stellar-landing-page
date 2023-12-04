import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import Image from "../assets images/merchant1.jpeg";
import Image2 from "../assets images/merchant2.jpeg";
import {
  ButtonApplyBlack,
  TextDetail,
  TextJobTitle,
} from "../career/CareerElement";

const RegisterMerchant = () => {
  return (
    <div>
      <LayoutMt40>
        <div className="row">
          <div className="col-md-4 layout-cv">
            <TextJobTitle>Register to Merchant</TextJobTitle>
            <TextDetail>
              Line: @stellar.powerhouse <br></br>
              Email: stellar.powerhouse@gmail.com<br></br>
              Alamat: Jl. Kupang Indah VIII No.1 Dukuh Kupang<br></br>
              WA: 08113336000
            </TextDetail>
            <ButtonApplyBlack
              href="https://api.whatsapp.com/send?phone=62819894141"
              target="_blank"
              rel="noreferrer noopener"
              className="flex-button"
            >
              Register
            </ButtonApplyBlack>
          </div>
          <div className="col-md-4 d-none d-sm-block">
            {" "}
            <img
              src={Image}
              alt="Stellar Image"
              className="img-fluid"
              lazy="loading"
            />
          </div>
          <div className="col-md-4  d-none d-sm-block">
            {" "}
            <img
              src={Image2}
              alt="Stellar Image"
              className="img-fluid"
              lazy="loading"
            />
          </div>
        </div>
      </LayoutMt40>
    </div>
  );
};

export default RegisterMerchant;
