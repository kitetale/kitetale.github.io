import React from "react";
import {
  content,
  top,
  title,
  tabs,
  tab,
  images,
} from "./ProjectPage.module.css";
import Carousel from "../../component/Carousel/Carousel";
import placeholder from "../../images/me.png";

const ProjectPage = () => {
  return (
    <div>
      <div className={content}>
        <div className={top}>
          <div className={title}>WORKS</div>
          <div className={tabs}> hi</div>
        </div>
      </div>
      <Carousel>
        <img className={images} src={placeholder} alt="placeholder" />
        <img className={images} src={placeholder} alt="placeholder" />
        <img className={images} src={placeholder} alt="placeholder" />
        <img className={images} src={placeholder} alt="placeholder" />
        <img className={images} src={placeholder} alt="placeholder" />
      </Carousel>
    </div>
  );
};

export default ProjectPage;

// https://ibaslogic.com/instant-post-switching-in-a-gatsbyjs-site/
// https://dev.to/rakumairu/simple-react-carousel-24m0
