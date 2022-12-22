import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { overall, content, top, title, footer,
    footDescrip, } from "./WorkPage.module.css";
import "./WorkPage.module.css";
import AppHeader from "../../component/AppHeader/AppHeader";

const WorkPage = ({ data }) => {
  return (
    <div>
      <div className={overall}>
        <AppHeader />
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
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        local_imgs {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default WorkPage;
