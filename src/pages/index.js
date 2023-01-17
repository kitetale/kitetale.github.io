import React, { useState, useEffect } from "react";
import AppHeader from "../component/AppHeader/AppHeader";
import AppFooter from "../component/AppFooter/AppFooter";
import {
  overall,
  fullsize,
  msg,
  notice,
  aStyles,
} from "./LandingPage.module.css";
import favicon from "../images/favicon.png";

import ThreeLazy from "../component/three-lazy";
import Shapes from "../component/three-main";
import Balls from "../component/three-balls";
import BallFalling from "../component/three-balls2";
//import Type from '../component/type-cloud';
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const aStyles = {
    color: "#ffa53e",
  };
  const isBrowser = () => typeof window !== "undefined"
  const [deviceSize, changeDeviceSize] = useState(isBrowser() &&window.innerWidth>1022);
  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth>1022);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
  });

  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim</title>
      </Helmet>
      <div className={overall}>
        <AppHeader />
        <div className={fullsize}>
          {deviceSize ? <Balls /> : <BallFalling />}
        </div>
        <div className={msg}>
          <h1>Hello! I'm Ashley &#128526;</h1>
          <h2>
            I’m an interaction designer and a front-end developer who loves
            visual effects, problem solving, and storytelling.
          </h2>
        </div>
        <div className={notice}>
          <h3>
            Hello!
            <br /> Mobile version is currently under construction.
          </h3>
          <p>
            Please use desktop or tablet to view my website. <br />
            If you're looking for my resume, please follow <t />
            <a
              style={aStyles}
              href="https://drive.google.com/file/d/1-HE9i8McCy_238XSWvyiCgoOfMsv2CR7/view?usp=sharing"
            >
              this link
            </a>
            .<br />
            <br /> If you have any questions or would like to have a chat, <t />{" "}
            <a style={aStyles} href="mailto:kitetale248@gmail.com">
              contact me{" "}
            </a>
            !
          </p>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default LandingPage;
