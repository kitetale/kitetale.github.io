import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import "./WorkPage.module.css";


const WorkPage = ({data}) => {
    return (
        <div>
            <MDXRenderer
                local={data.mdx.frontmatter.local_imgs}>
                {data.mdx.body}
            </MDXRenderer>
        </div>
    );
};

// export const query = graphql`
//     query ($id: String) {
//         mdx(id: {eq: $id}) {
//             frontmatter {
//                 title
//                 local_imgs {
//                     childImageSharp {
//                         gatsbyImageData
//                     }
//                 }
//             }
//             body
//         }
//     }`;

export default WorkPage;