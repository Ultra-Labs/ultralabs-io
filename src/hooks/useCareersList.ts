import { graphql, useStaticQuery } from "gatsby";

export const useCareersList = () => {
  const careersList = useStaticQuery(graphql`
    {
      positionList: allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/careers/" } } }
      ) {
        edges {
          node {
            frontmatter {
              positionText
              positionTitle
              positionLabel
              careersListTitile
              careersListDescription
              heroImg {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              path
            }
          }
        }
      }
    }
  `);

  const data = careersList?.positionList?.edges.map(
    (item) => item.node.frontmatter
  );

  return data;
};
