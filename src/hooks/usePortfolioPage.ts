import { graphql, useStaticQuery } from "gatsby";

export const usePortfolioPage = () => {
  const portfolioPage = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "portfolio" } }) {
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
          heroLargeImg {
            childImageSharp {
              gatsbyImageData(quality: 50)
            }
          }
          heroSmallImg {
            childImageSharp {
              gatsbyImageData(quality: 80)
            }
          }
          heroExtraSmallImg {
            childImageSharp {
              gatsbyImageData(quality: 80)
            }
          }
          contactImg {
            childImageSharp {
              gatsbyImageData
            }
          }
          contactTitle
          textDescription
        }
      }
    }
  `);

  const data = portfolioPage?.markdownRemark?.frontmatter;

  return data;
};
