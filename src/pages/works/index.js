import React from "react";
import {
  content,
  top,
  title,
  tabs,
  images,
  carousel,
} from "./WorkPage.module.css";
import Carousel from "../../component/Carousel/Carousel";
import placeholder from "../../images/me.png";
import AppHeader from "../../component/AppHeader/AppHeader";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

const ProjectPage = ({ data }) => {
  return (
    <div>
      <AppHeader />
      <div className={content}>
        <div className={top}>
          <div className={title}>WORKS</div>
          <div className={tabs}> hi</div>
        </div>
      </div>
      <div className={carousel}>
        <Carousel show={4.3}>
          {data.allMdx.nodes.map((node) => (
            <article
              key={node.id}
              className={`filterArt ${node.frontmatter.tag}`}
            >
              <div className={images}>
                <Link to={`/works/${node.slug}`}>
                  <GatsbyImage
                    className={images}
                    image={getImage(node.frontmatter.hero_img)}
                    alt={node.frontmatter.hero_img_alt}
                  />
                </Link>
              </div>
            </article>
          ))}
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
          <img className={images} src={placeholder} alt="placeholder" />
        </Carousel>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: id }) {
      nodes {
        frontmatter {
          title
        }
        slug
        id
      }
    }
  }
`;

export default ProjectPage;
