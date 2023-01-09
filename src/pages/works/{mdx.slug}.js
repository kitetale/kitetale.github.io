import React from "react";
import { graphql } from "gatsby";
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
  footer,
  footDescrip,
} from "./WorkPage.module.css";
import AppHeader from "../../component/AppHeader/AppHeader";
import {Helmet} from 'react-helmet';
import favicon from "../../images/favicon.png";

const WorkPage = ({ data }) => {
  const title_col = {
    color: data.mdx.frontmatter.title_color
  }
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <title>Ashley Kim | {data.mdx.frontmatter.title}</title>
      </Helmet>

        <AppHeader />

        <h1 className={title2}>{data.mdx.frontmatter.title}</h1>
        <h2 className={descrip}>{data.mdx.frontmatter.description}</h2>
 
      <div className={hero_img}>
        <GatsbyImage
          className={fullsize}
          image={getImage(data.mdx.frontmatter.hero_img)}
          alt={data.mdx.frontmatter.hero_img_alt}
        />
        <h1 className={title3} style={title_col}>{data.mdx.frontmatter.title}</h1>
      </div>
      <div className={overall}>
        <div className={content}>
          <MDXRenderer local={data.mdx.frontmatter.local_imgs}>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
      <footer className={footer}>(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง</footer>
      <footer className={footDescrip}>
        Built with Gatsby {"&"} React! Website under construction.
      </footer>
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
        local_imgs {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default WorkPage;
