import React, { useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  TextTrain,
  TitleTrain,
  DescTrain,
  ButtonTrain,
  LayoutTraining,
} from "./HomepageElement";
import { useDispatch, useSelector } from "react-redux";
import {
  getTraining,
  trainingSelector,
} from "../../reduxtoolkit/trainingSlice";
import styled from "styled-components";

const Card1 = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0) 33.99%,
      #121212 100%
    ),
    url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 296px 32px 32px;
  width: 100%;
  height: 450px;
`;

const OurTraining = () => {
  const dispatch = useDispatch();
  const training = useSelector(trainingSelector.selectAll);

  useEffect(() => {
    dispatch(getTraining());
  }, [dispatch]);

  return (
    <div>
      <LayoutTraining>
        <TextTrain>Our Training Services</TextTrain>
        <LazyLoadComponent className="">
          {/* <LayoutCard> */}
          <div className="row">
            {training.map((trainings) => (
              <div className="col-md-6 mb-4" key={trainings.id_cms_training}>
                <Card1 image={trainings.img_url}>
                  <TitleTrain>{trainings.name}</TitleTrain>
                  <DescTrain>
                    {trainings.session} session {trainings.persons}{" "}
                    {trainings.coach} coach
                  </DescTrain>
                  <ButtonTrain
                    href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Free Trial
                  </ButtonTrain>
                </Card1>
              </div>
            ))}
          </div>

          {/* </LayoutCard> */}
        </LazyLoadComponent>
      </LayoutTraining>
    </div>
  );
};

export default OurTraining;
