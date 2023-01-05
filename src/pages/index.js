import React from "react";
import AppHeader from "../component/AppHeader/AppHeader";
import AppFooter from "../component/AppFooter/AppFooter";
import { overall, fullsize, msg, notice, aStyles } from "./LandingPage.module.css";
import AshleyKim from "../images/AshleyKim.svg";

import ThreeLazy from "../component/three-lazy";
import Shapes from "../component/three-main";
import Balls from "../component/three-balls";
//import Type from '../component/type-cloud';

const LandingPage = () => {
  const aStyles = {
    color: '#ffa53e'
  }
  return (
    <div>
      <div className={overall}>
        <AppHeader />
        <div className={fullsize}>
          <Balls />
        </div>
        <div className={msg}>
          <h1>Hello! I'm Ashley &#128526;</h1>
          <h2>
            I’m an interaction designer and a frontend developer who loves
            visual effects, problem solving, and storytelling.
          </h2>
        </div>
        <div className={notice}>
          <h3>Hello!<br/> Mobile version is currently under construction.</h3>
          <p>
            Please use desktop or tablet to view my website. <br />
            If you're looking for my resume, please follow <t/>
            <a style={aStyles} href="https://drive.google.com/file/d/1-HE9i8McCy_238XSWvyiCgoOfMsv2CR7/view?usp=sharing">
             this link
            </a>.<br/><br/> If you have any questions or would like to have a chat, <t/> <a style={aStyles}href="mailto:kitetale248@gmail.com">contact me </a>!
          </p>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default LandingPage;
