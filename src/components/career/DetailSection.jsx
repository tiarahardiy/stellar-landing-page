import React from "react";
import { LayoutMt60 } from "../GlobalElement";
import Image from "../assets images/jobdetail.webp";
import { ButtonApplyBlack, TextDetail, TextJobTitle } from "./CareerElement";

const DetailSection = () => {
  return (
    <div>
      <LayoutMt60>
        <div className="row">
          <div className="col-md-9">
            <img
              src={Image}
              lazy="loading"
              alt="Stellar Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3 layout-cv">
            <TextJobTitle>Coach for Daily Training</TextJobTitle>
            <ul>
              <li className="list-detail">
                <TextDetail>
                  Pria / wanita usia 20 - 35 tahun Domisili Surabaya / Jakarta
                  dan sekitarnya{" "}
                </TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>Berpenampilan menarik</TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>Peduli tentang kesehatan dan fitness</TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>Ingin mendalami ilmu calisthenic</TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>
                  Berkomunikasi dengan baik dan menyenangkan
                </TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>
                  Memiliki kesabaran dan ketelatenan dalam melatih
                </TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>
                  Mau bekerja keras, disiplin dan memotivasi
                </TextDetail>
              </li>
              <li className="list-detail">
                <TextDetail>
                  Nilai lebih jika tergabung dalam komunitas calisthenics
                </TextDetail>
              </li>
            </ul>
            <div className="flex-button">
              <ButtonApplyBlack>Apply Now</ButtonApplyBlack>
            </div>
          </div>
        </div>
      </LayoutMt60>
    </div>
  );
};

export default DetailSection;
