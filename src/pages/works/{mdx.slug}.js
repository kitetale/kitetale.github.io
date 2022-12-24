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
import "./WorkPage.module.css";
import AppHeader from "../../component/AppHeader/AppHeader";

const WorkPage = ({ data }) => {
  return (
    <div>
      <div className={overall}>
        <AppHeader />
        
        <h1 className={title2}>{data.mdx.frontmatter.title}</h1>
        <h2 className={descrip}>{data.mdx.frontmatter.description}</h2>
        <div className={hero_img}>
          <GatsbyImage
            className={fullsize}
            image={getImage(data.mdx.frontmatter.hero_img)}
            alt={data.mdx.frontmatter.hero_img_alt}
          />
          <h1 className={title3}>{data.mdx.frontmatter.title}</h1>
        </div>

        <div className={content}>
          <MDXRenderer local={data.mdx.frontmatter.local_imgs}>
            {data.mdx.body}
          </MDXRenderer>
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
  query ($id: String){
    mdx (id: {eq: $id}){
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
