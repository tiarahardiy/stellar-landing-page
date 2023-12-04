import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import {
  ButtonApply,
  CardJob,
  TextBranch,
  TextJobTitle,
  TitleJob,
} from "./CareerElement";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobList = () => {
  return (
    <div>
      <LayoutMt40>
        <TextJobTitle>Job Vacancy</TextJobTitle>
        <CardJob>
          <div>
            <TitleJob>Coach for Daily Training</TitleJob>
            <div className="flex-branch-job">
              <FaMapMarkerAlt className="icon-map" />
              <TextBranch>All Branch</TextBranch>
            </div>
          </div>
          <div className="flex-button-job">
            <ButtonApply>Apply now</ButtonApply>
            <a href="/career-detail" className="link-view-job">
              View Details
            </a>
          </div>
        </CardJob>
        <CardJob>
          <div>
            <TitleJob>Coach for Daily Training</TitleJob>
            <div className="flex-branch-job">
              <FaMapMarkerAlt className="icon-map" />
              <TextBranch>All Branch</TextBranch>
            </div>
          </div>
          <div className="flex-button-job">
            <ButtonApply>Apply now</ButtonApply>
            <a href="/career-detail" className="link-view-job">
              View Details
            </a>
          </div>
        </CardJob>
        <CardJob>
          <div>
            <TitleJob>Coach for Daily Training</TitleJob>
            <div className="flex-branch-job">
              <FaMapMarkerAlt className="icon-map" />
              <TextBranch>All Branch</TextBranch>
            </div>
          </div>
          <div className="flex-button-job">
            <ButtonApply>Apply now</ButtonApply>
            <a href="/career-detail " className="link-view-job">
              View Details
            </a>
          </div>
        </CardJob>
      </LayoutMt40>
    </div>
  );
};

export default JobList;
