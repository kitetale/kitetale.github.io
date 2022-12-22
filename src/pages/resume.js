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

const ResumePage = () => {
  return (
    <div>
      <div className={overall}>
        <AppHeader />

        <div className={content}>
          <div className={title}>RESUME</div>
          <img
            src={resume}
            alt="Ashley Kim resume (Dec.2022)"
            className={resumeStyle}
          />
          <div className={center}>
            <div></div>
            <a href="https://drive.google.com/file/d/1-HE9i8McCy_238XSWvyiCgoOfMsv2CR7/view?usp=sharing">
              Download PDF
            </a>
            <div></div>
          </div>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated in January 2023.
      </footer>
    </div>
  );
};

export default ResumePage;
