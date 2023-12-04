import React from "react";
import { TextJobTitle } from "../career/CareerElement";
import { LayoutMt40 } from "../GlobalElement";
import {
  Card,
  MemberMerchant,
  MerchantLoc,
  NameMerchant,
  Profile,
  TextProfile,
  TextDesc,
  ProfileGreen,
  ProfilePink,
  ProfileOrange,
} from "./MerchantElement";
import { useDispatch, useSelector } from "react-redux";
import {
  getMerchant,
  merchantSelector,
} from "../../reduxtoolkit/merchantSlice";
import { useEffect } from "react";

const OurMerchant = () => {
  const dispatch = useDispatch();
  const merchants = useSelector(merchantSelector.selectAll);
  console.log("merchants:", merchants);

  useEffect(() => {
    dispatch(getMerchant());
  }, [dispatch]);

  // Function to generate a color based on a string
  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.abs(hash).toString(16).substring(0, 6);
    return `#${"0".repeat(6 - color.length)}${color}`; // Ensure it's always 6 characters
  }

  return (
    <LayoutMt40>
      <TextJobTitle>Our Merchant</TextJobTitle>

      <div className="row">
        {merchants.map((merchant) => (
          <div className="col-md-3  mt-4" key={merchant.id_merchant}>
            <div className="card card-location">
              <div className="card-body">
                <MemberMerchant>
                  <Profile backgroundColor={stringToColor(merchant.User.name)}>
                    <TextProfile>{merchant.User.name[0]}</TextProfile>
                  </Profile>
                  <div className="ms-2">
                    <NameMerchant>{merchant.User.name}</NameMerchant>
                    <MerchantLoc>{merchant.bill_address_merchant}</MerchantLoc>
                  </div>
                </MemberMerchant>
                <TextDesc>
                  {merchant.desc_merchant.split(" ").slice(0, 7).join(" ") +
                    "..."}
                </TextDesc>
              </div>
            </div>

            {/* <Card></Card> */}
          </div>
        ))}
        {/* <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfileOrange>
                <TextProfile>K</TextProfile>
              </ProfileOrange>
              <div>
                <NameMerchant>Kag</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>Get 10 point for member stellar</TextDesc>
          </Card>
        </div> */}
        {/* <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfileOrange>
                <TextProfile>K</TextProfile>
              </ProfileOrange>
              <div>
                <NameMerchant>Kag</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>Get 10 point for member stellar</TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfileGreen>
                <TextProfile>RA</TextProfile>
              </ProfileGreen>
              <div>
                <NameMerchant>Rk Auto Detailing</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>Get discount 10% for car wash</TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfilePink>
                <TextProfile>EC</TextProfile>
              </ProfilePink>
              <div>
                <NameMerchant>Eons Clinic</NameMerchant>
                <MerchantLoc>Sukabumi, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>
              For Member Stellar Get Discount : 20% tornado peel | 15% body
              treatment | 10% facial basic | 10% All RF
            </TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfileOrange>
                <TextProfile>C</TextProfile>
              </ProfileOrange>
              <div>
                <NameMerchant>Concrete</NameMerchant>
                <MerchantLoc>Jakarta, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>Get discount 15% for member stellar</TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <Profile>
                <TextProfile>BB</TextProfile>
              </Profile>
              <div>
                <NameMerchant>Bunn butter</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>Get discount 10% for member stellar</TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <ProfileGreen>
                <TextProfile>CL</TextProfile>
              </ProfileGreen>
              <div>
                <NameMerchant>Classy Laundry</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>
              Get discount 20% for all member Stellar Powerhouse Surabaya
            </TextDesc>
          </Card>
        </div>
        <div className="col-md-3  mt-4">
          <Card>
            <MemberMerchant>
              <Profile>
                <TextProfile>C</TextProfile>
              </Profile>
              <div>
                <NameMerchant>Chuwi</NameMerchant>
                <MerchantLoc>Surabaya, Indonesia</MerchantLoc>
              </div>
            </MemberMerchant>
            <TextDesc>
              Get discount 15% for all member Stellar Powerhouse
            </TextDesc>
          </Card>
        </div> */}
      </div>
    </LayoutMt40>
  );
};

export default OurMerchant;
