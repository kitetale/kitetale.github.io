import React from "react";
import { content, title, resumeStyle, center } from "./ResumePage.module.css";
import resume from "../../images/AshleyKimResume.png";

const ResumePage = () => {
  return (
    <div className={content}>
      <div className={title}>RESUME</div>
      <img src={resume} alt="Ashley Kim resume 2022" className={resumeStyle} />
      <div>
        <p className={center}>Download PDF</p>
      </div>
    </div>
  );
};

export default ResumePage;
