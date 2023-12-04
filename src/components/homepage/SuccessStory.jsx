import React, { useEffect } from "react";
import {
  DescLayout,
  LayoutStory,
  TestiLayout,
  TextSsBold,
  LayoutSS,
  TextSs,
  DescSs,
  UserTesti,
  UserName,
  TextName,
  TextMemb,
  StoryLayout,
  CardStory,
  TextNameSS,
  TextStory,
  UserTestiSS,
  TextMembSS,
} from "./HomepageElement";
import Profile from "../assets images/jeno.jpg";
import Petik from "../assets images/petik.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getStory, storySelector } from "../../reduxtoolkit/storySlice";
import moment from "moment/moment";

const SuccessStory = () => {
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
      <LayoutStory>
        <LayoutSS>
          <TextSsBold>Success</TextSsBold>
          <TextSs>Story</TextSs>
        </LayoutSS>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 4.5,
          }}
        >
          <DescLayout>
            <img src={Petik} className="petik" alt="" lazy="loading" />
            <TestiLayout>
              <DescSs>
                I've been training at Stellar Powerhouse for almost 2 years. I
                enjoy it because I get the results especially when I decide to
                consistently train. My family is a family that easily gains
                weight, I didn't really believe it at first. But the
                consistency, coach Stellar and the movement I did right provided
                optimal results."
              </DescSs>
              <UserTesti>
                <img
                  src={Profile}
                  className="img-story"
                  alt=""
                  lazy="loading"
                />
                <UserName>
                  <TextName>Pollyana Alexander Setiawan</TextName>
                  <TextMemb>Member Since 20 Sep 2020</TextMemb>
                </UserName>
              </UserTesti>
            </TestiLayout>
          </DescLayout>
        </motion.div>
        <StoryLayout>
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
        </StoryLayout>
      </LayoutStory>
    </div>
  );
};

export default SuccessStory;
