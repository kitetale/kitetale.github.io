import React, { useState, useEffect } from "react";
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
  description,
  smaller,
  relative,
  noshow,
  topbutton,
  toparrow,
  footer,
  footDescrip,
} from "./WorkPage.module.css";
import Carousel from "../../component/Carousel/Carousel";
import placeholder from "../../images/me.png";
import AppHeader from "../../component/AppHeader/AppHeader";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import { Grid } from "@react-three/postprocessing";
import {Helmet} from 'react-helmet';
import favicon from "../../images/favicon.png";
import arrow from "../../images/arrow.svg";

const ProjectPage = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | Works</title>
      </Helmet>
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
                      <p className={description}> {node.frontmatter.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
              <a
            href="javascript:window.scrollTo({top: 0, behavior: 'smooth'});"
            className={isVisible?relative:noshow}
          >
            <div className={topbutton}>
              <img
                src={arrow}
                className={toparrow}
                alt="Scroll to Top button"
              />
            </div>
          </a>
            </article>
          ))}
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Last updated on January 12, 2023. <br/> More projects to be added shortly.
      </footer>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx (sort: {fields: frontmatter___order, order: ASC}){
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
