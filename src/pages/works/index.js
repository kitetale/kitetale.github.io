import React from "react";
import {
  overall,
  content,
  top,
  title,
  tabs,
  images,
  carousel,
  cardGrid,
  workCard,
  noMargin,
  workCardInner,
  workCardImg,
  overlayTitle,
  workCardDescription,
  smaller,
  footer,
  footDescrip,
} from "./WorkPage.module.css";
import Carousel from "../../component/Carousel/Carousel";
import placeholder from "../../images/me.png";
import AppHeader from "../../component/AppHeader/AppHeader";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { Grid } from "@react-three/postprocessing";

const ProjectPage = ({ data }) => {
  return (
    <div>
      <div className={overall}>
        <AppHeader />
        <div className={content}>
          <div className={top}>
            <div className={title}>WORKS</div>
            {/* <div className={tabs}> hi</div> */}
          </div>
        </div>
        <div className={cardGrid}>
          {data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <div className={workCard}>
                <Link className={noMargin} to={`/works/${node.slug}`}>
                  <div className={workCardInner}>
                    <GatsbyImage
                      className={workCardImg}
                      image={getImage(node.frontmatter.hero_img)}
                      alt={node.frontmatter.hero_img_alt}
                    />
                    <div className={overlayTitle}>
                      <h4>{node.frontmatter.title}</h4>
                    </div>
                    <div className={workCardDescription}>
                      <h2 className={smaller}>{node.frontmatter.title}</h2>
                      {node.frontmatter.description}
                      <p> </p>
                    </div>
                  </div>
                </Link>
              </div>
            </article>
          ))}
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
    allMdx {
      nodes {
        frontmatter {
          description
          hero_img_alt
          hero_img {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_img_description
          title
        }
        id
        slug
      }
    }
  }
`;

export default ProjectPage;
