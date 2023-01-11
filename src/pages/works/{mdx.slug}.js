import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  overall,
  content,
  fullsize,
  top,
  title3,
  title2,
  hero_img,
  descrip,
  projects,
  others,
  other,
  prevtext,
  nexttext,
  relative,
  topbutton,
  toparrow,
  noshow,
  footer,
  footDescrip,
  noFlow,
} from "./WorkPage.module.css";
import AppHeader from "../../component/AppHeader/AppHeader";
import { Helmet } from "react-helmet";
import favicon from "../../images/favicon.png";
import arrow from "../../images/arrow.svg";

const WorkPage = ({ data }) => {
  const title_col = {
    color: data.mdx.frontmatter.title_color,
  };
  const next_col = {
    color: data.mdx.frontmatter.next_color,
  };
  const prev_col = {
    color: data.mdx.frontmatter.prev_color,
  };
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
    <div className={noFlow}>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | {data.mdx.frontmatter.title}</title>
      </Helmet>
      <div className={noFlow}>
        <AppHeader />

        <h1 className={title2}>{data.mdx.frontmatter.title}</h1>
        <h2 className={descrip}>{data.mdx.frontmatter.description}</h2>

        <div className={hero_img}>
          <GatsbyImage
            className={fullsize}
            image={getImage(data.mdx.frontmatter.hero_img)}
            alt={data.mdx.frontmatter.hero_img_alt}
          />
          <h1 className={title3} style={title_col}>
            {data.mdx.frontmatter.title}
          </h1>
        </div>
        <div className={overall}>
          <div className={content}>
            <MDXRenderer local={data.mdx.frontmatter.local_imgs}>
              {data.mdx.body}
            </MDXRenderer>
          </div>
          <h2 className={projects}>View Other Projects</h2>
          <div className={others}>
            <Link
              className={relative}
              to={`/works/${data.mdx.frontmatter.prev_link}`}
            >
              <GatsbyImage
                className={other}
                image={getImage(data.mdx.frontmatter.prev_img)}
                alt={`hero image of ${data.mdx.frontmatter.prev}`}
              />
              <h3 className={prevtext} style={prev_col}>
                {data.mdx.frontmatter.prev}
              </h3>
            </Link>
            <Link
              className={relative}
              to={`/works/${data.mdx.frontmatter.next_link}`}
            >
              <GatsbyImage
                className={other}
                image={getImage(data.mdx.frontmatter.next_img)}
                alt={`hero image of ${data.mdx.frontmatter.next}`}
              />
              <h3 className={nexttext} style={next_col}>
                {data.mdx.frontmatter.next}
              </h3>
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
        </div>
        <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
        <footer className={footDescrip}>
          Built with Gatsby {"&"} React! Website under construction.
        </footer>
      </div>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        description
        hero_img {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_img_alt
        hero_img_description
        title
        title_color
        next
        next_link
        next_color
        next_img {
          childImageSharp {
            gatsbyImageData
          }
        }
        prev
        prev_link
        prev_color
        prev_img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default WorkPage;
