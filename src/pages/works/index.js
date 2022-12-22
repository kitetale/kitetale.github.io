import React from "react";
import {
  overall,
  content,
  top,
  title,
  tabs,
  images,
  carousel,
  footer,
  footDescrip
} from "./WorkPage.module.css";
import Carousel from "../../component/Carousel/Carousel";
import placeholder from "../../images/me.png";
import AppHeader from "../../component/AppHeader/AppHeader";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

const ProjectPage = ({ data }) => {
  return (
    <div>
    <div className={overall}>
      <AppHeader />
      <div className={content}>
        <div className={top}>
          <div className={title}>WORKS</div>
          <div className={tabs}> hi</div>
        </div>
      </div>
      <div className={carousel}>
        <Carousel show={4.3} infiniteLoop={true}>
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />

          {/* {data.allMdx.nodes.map((node) => (
            <Link to={`/works/${node.frontmatter.slug}`}>
              <img
                className={images}
                src={node.frontmatter.hero_img}
                alt={node.frontmatter.hero_img_alt}
              />
            </Link>
          ))} */}
        </Carousel>
      </div>
    </div>
    <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
    <footer className={footDescrip}>
      Built with Gatsby {"&"} React! Last updated in January 2023.
    </footer>
  </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___order }) {
      nodes {
        frontmatter {
          title
          hero_img_alt
          hero_img_description
          tag
          order
          local_imgs {
            absolutePath
          }
        }
      }
    }
  }
`;

export default ProjectPage;
