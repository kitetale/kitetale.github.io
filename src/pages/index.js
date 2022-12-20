import React from "react";
import AppHeader from "../component/AppHeader/AppHeader";
import { overall, fullsize, msg } from "./LandingPage.module.css";

import ThreeLazy from "../component/three-lazy";
import Shapes from "../component/three-main";
//import Type from '../component/type-cloud';

const LandingPage = () => {
  return (
    <div className={overall}>
      <AppHeader />
      <div className={msg}>
        <h1>Hello! I'm Ashley &#128526;</h1>
        <h2>
          I’m an interaction designer and a frontend developer who loves visual
          effects, problem solving, and storytelling.
        </h2>
      </div>
      <div className={fullsize}>
        {/* <Type/> */}
        {/* <ThreeLazy/> */}
        <Shapes />
      </div>
      
    </div>
  );
};

export default LandingPage;
