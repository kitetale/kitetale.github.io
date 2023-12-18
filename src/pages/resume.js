import React from "react";
import {
  overall,
  content,
  title,
  resumeStyle,
  center,
  footer,
  footDescrip,
} from "./ResumePage.module.css";
import resume from "../images/AshleyKimResume.png";
import AppHeader from "../component/AppHeader/AppHeader";
import {Helmet} from 'react-helmet';
import favicon from "../images/favicon.png";


const ResumePage = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | Resume</title>
      </Helmet>
      <div className={overall}>
        <AppHeader />

        <div className={content}>
          <div className={title}>RESUME</div>
          <img
            src={resume}
            alt="Ashley Kim Resume (last updated Aug 2023)"
            className={resumeStyle}
          />
          <div className={center}>
            <div></div>
            <a href="https://drive.google.com/file/d/12HvhqtBw0QVMOWU2qkhvCrFoYH-pDctN/view?usp=sharing">
              Download PDF
            </a>
            <div></div>
          </div>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated on September 5, 2023.
      </footer>
    </div>
  );
};

export default ResumePage;
