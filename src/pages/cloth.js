import React from "react";
import { withPrefix } from "gatsby";
import {
  overall,
  content,
  centerTitle,
  center,
  centerButton,
  footer,
  footDescrip,
} from "./ResumePage.module.css";
import AppHeader from "../component/AppHeader/AppHeader";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";

const ClothSimulation = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | Cloth Simulation</title>
        <script
          type="text/javascript"
          charset="utf-8"
          src={withPrefix("/clothsim.js")}
        ></script>
      </Helmet>
      <div className={overall}>
        <AppHeader />
        <div className={content}>
          <div className={centerTitle}>
            <h1>Cloth Simulation</h1>
            <p>by Ashley Kim (ayk2@andrew.cmu.edu)</p>
          </div>
          <div id="canvas"></div>
          {/* <canvas
            id="canvas"
            width="1000px"
            height="800px"
            className={center}
          ></canvas> */}
          <div id="resetButton"></div>
          <div className={center}>
          Checkout more details of this project on &nbsp; 
            <a href="https://github.com/kitetale/Spring-Mass-Cloth-sim"> GitHub</a>.
          </div>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated on March 10, 2023.
      </footer>
    </div>
  );
};

export default ClothSimulation;
