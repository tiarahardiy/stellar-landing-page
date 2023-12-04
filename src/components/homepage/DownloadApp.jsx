import React from "react";
import {
  AppPlaystore,
  DescApp,
  InsideApp,
  LayoutApp,
  TextApp,
} from "./HomepageElement";
import Apple from "../assets images/apple.png";
import Google from "../assets images/google.png";
import App from "../assets images/App Store.png";

const DownloadApp = () => {
  return (
    <div>
      <LayoutApp>
        <InsideApp>
          <div className="mb-5">
            <TextApp>
              Training Everywhere <br></br> and Everytime
            </TextApp>
            <DescApp>
              "You love working out at home? Or maybe in a place surrounded by
              nature? Use Stellar Pass to optimize your workout, anywhere you
              are!"
            </DescApp>
            <AppPlaystore>
              <a>
                <img src={Apple} className="" alt="" lazy="loading" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.stellar.stellar_pass"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Google} className="" alt="" lazy="loading" />
              </a>
            </AppPlaystore>
          </div>

          <div>
            <img src={App} className="img-fluid" alt="" lazy="loading" />
          </div>
        </InsideApp>
      </LayoutApp>
    </div>
  );
};

export default DownloadApp;
