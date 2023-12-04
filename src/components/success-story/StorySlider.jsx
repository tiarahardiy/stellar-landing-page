import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import {
  CardStory,
  TextNameSS,
  TextStory,
  UserName,
  UserTestiSS,
  TextMembSS,
} from "../homepage/HomepageElement";
import { LayoutMt40 } from "../GlobalElement";
import { useDispatch, useSelector } from "react-redux";
import { getStory, storySelector } from "../../reduxtoolkit/storySlice";
import moment from "moment/moment";

const StorySlider = () => {
  const dispatch = useDispatch();
  const story = useSelector(storySelector.selectAll);

  useEffect(() => {
    dispatch(getStory());
  }, [dispatch]);

 

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 3 },
  };

  const items = story.map((storymember) => (
    <div
      className="item "
      data-value={storymember.id_s_story}
      key={storymember.id_s_story}
    >
      <CardStory>
        <TextStory>"{storymember.testimoni}"</TextStory>
        <UserTestiSS>
          <img
            src={storymember.img_url}
            className="img-story"
            alt=""
            lazy="loading"
          />
          <UserName>
            <TextNameSS>{storymember.name}</TextNameSS>
            <TextMembSS>
              Member Since{" "}
              {moment(storymember.join_date).format("DD MMMM YYYY")}
            </TextMembSS>
          </UserName>
        </UserTestiSS>
      </CardStory>
    </div>
  ));

  return (
    <div>
      <LayoutMt40>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          renderPrevButton={() => {
            return <HiArrowNarrowLeft className="icon" />;
          }}
          renderNextButton={() => {
            return <HiArrowNarrowRight className="icon" />;
          }}
        />
      </LayoutMt40>
    </div>
  );
};

export default StorySlider;
