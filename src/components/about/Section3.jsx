import React from "react";
import { LayoutMt40 } from "../GlobalElement";
import {
  ButtonBlack,
  LayoutSection3,
  TextDesc16px,
  TextList,
} from "./AboutElement";
import Image from "../assets images/section3.webp";
import { TextBeBold } from "../homepage/HomepageElement";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div>
      <LayoutMt40>
        <LayoutSection3>
          <img
            src={Image}
            lazy="loading"
            alt="Stellar Image"
            className="img-section3 d-none d-sm-block"
          />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            <div className="padding-layout-section-3">
              <TextBeBold>Stellar Powerhouse</TextBeBold>
              <TextDesc16px>
                Stellar Powerhouse is a premium calisthenics training that we
                have in
                <br></br>Surabaya, Jakarta, Taipei, and Malang with 2500+
                members. Stellar
                <br></br> Powerhouse was started by Dedy Gunawan, the founder of
                Team Draconian,
                <br></br>one of the largest calisthenics teams in Indonesia with
                400+ members in the
                <br></br> Surabaya, Bali and Jakarta areas.
              </TextDesc16px>

              <ul>
                <li>
                  <TextList>
                    World’s 1st Premium Calisthenics body-shaping training.{" "}
                  </TextList>
                </li>
                <li>
                  <TextList>
                    Most rapidly-growing Calisthenics Gym in Indonesia.
                  </TextList>
                </li>
                <li>
                  <TextList>
                    Integration martial style discipline with dynamic rhythmic
                    drills.
                  </TextList>
                </li>
                <li>
                  <TextList>
                    Body-shaping through advance physical fitness with
                    actualization.
                  </TextList>
                </li>
              </ul>
              <div className="mt-button">
                <ButtonBlack>Free Trial</ButtonBlack>
              </div>
            </div>
          </motion.div>
        </LayoutSection3>
      </LayoutMt40>
    </div>
  );
};

export default Section3;
