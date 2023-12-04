import React, { useEffect } from "react";
import { LayoutMt60 } from "../GlobalElement";
import { ButtonJoin } from "../homepage/HomepageElement";
import {
  TextDesc,
  TextTrain,
  TextTitle,
  TextDescBold,
} from "./TrainingElement";
import { useDispatch, useSelector } from "react-redux";
import {
  getTraining,
  trainingSelector,
} from "../../reduxtoolkit/trainingSlice";
import styled from "styled-components";

const ImageCard = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 247px 25px 0 25px;
  width: 100%;
`;

const HeroTraining = () => {
  const dispatch = useDispatch();
  const training = useSelector(trainingSelector.selectAll);
  console.log("training:", training);
  useEffect(() => {
    dispatch(getTraining());
  }, [dispatch]);

  return (
    <div>
      <LayoutMt60>
        <TextTrain className="mb-4">Our Training Services</TextTrain>
        <div className="row ">
          {training.map((trainings) => (
            <div className="col-md-4 mb-3" key={trainings.id_cms_training}>
              <div className="card card-training">
                <ImageCard image={trainings.img_url} className="card-img-top">
                  <TextTitle>{trainings.name}</TextTitle>
                </ImageCard>
                <div className="card-body">
                  <TextDesc>{trainings.description}</TextDesc>
                  <div className="d-flex justify-content-between ms-1 me-1">
                    <TextDescBold>{trainings.session} Sessions</TextDescBold>
                    <TextDescBold>Max {trainings.persons} Person</TextDescBold>
                    {/* <TextDescBold>{trainings.coach} coach</TextDescBold> */}
                  </div>
                  <div className="d-flex justify-content-center mt-3 mb-4">
                    <ButtonJoin
                      href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Free Trial
                    </ButtonJoin>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutMt60>
    </div>
  );
};

export default HeroTraining;
