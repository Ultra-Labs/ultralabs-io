import { graphql, useStaticQuery } from "gatsby";

export const useHomePage = () => {
  const homePage = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home" } }) {
        frontmatter {
          aboutText
          aboutTitle
          aboutImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          contactImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          heroImg {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          heroText
          heroTitle
          ourImg {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          canvasText
          canvasImg {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          ourQuote
          ourText
          ourTitle
          serviceImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          seoDescription
          seoTitle
          serviceText
          serviceTitle
          serviceList {
            serviceListText
            serviceListTitle
          }
          portfolioBlockTitle
          portfolioBlockText
          contactTitle
        }
      }
    }
  `);

  const data = homePage?.markdownRemark?.frontmatter;

  return data;
};
