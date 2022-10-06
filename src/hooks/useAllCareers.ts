import { graphql, useStaticQuery } from "gatsby";

export const useAllCareers = () => {
  const allCareers = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "careers" } }) {
        frontmatter {
          seoTitle
          seoDescription
          heroTitle
          heroText
          heroImg {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          careersListTitile
          careersListDescription
          careersDescription
          contactImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          contactTitle
        }
      }
    }
  `);

  const data = allCareers?.markdownRemark?.frontmatter;

  return data;
};
