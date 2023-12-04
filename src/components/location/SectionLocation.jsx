import React, { useEffect } from "react";
import { LayoutMt40 } from "../GlobalElement";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocation,
  locationSelector,
} from "../../reduxtoolkit/locationSlice";

const SectionLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector(locationSelector.selectAll);
  console.log("location:", location);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  return (
    <div>
      <LayoutMt40>
        <div className="row">
          {location.map((locations) => (
            <div className="col-md-4 mb-4" key={locations.id_branch}>
              <div className="card card-location">
                <div className="card-body ">
                  <h5 className="card-title title-location mb-2">
                    {locations.name_branch}
                  </h5>
                  <div className="card-subtitle  sub-location mb-3">
                    <IoLocationSharp className="map-icon me-2" />
                    {locations.address_branch}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <p className="text-schedule">
                      {" "}
                      Mon - Sat : 06.00 - 21.00 <br></br> Sun : Closed
                    </p>

                    <a href="#" className="link-location ">
                      See Location
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutMt40>
    </div>
  );
};

export default SectionLocation;
