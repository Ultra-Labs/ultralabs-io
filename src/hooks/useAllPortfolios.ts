import { graphql, useStaticQuery } from "gatsby";

export const useAllPortfolios = () => {
  const allPortfolios = useStaticQuery(graphql`
    {
      portfolioList: allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/our-portfolio/" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              seoTitle
              seoDescription
              path
              url
              category
              heroTitle
              heroText
              heroImg {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
              portfolioTitle
              portfolioImg {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              portfolioListImg {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              portfolioListLargeImg {
                childImageSharp {
                  gatsbyImageData(quality: 50)
                }
              }
              portfolioListSmallImg {
                childImageSharp {
                  gatsbyImageData(quality: 80)
                }
              }
              portfolioListExtraSmallImg {
                childImageSharp {
                  gatsbyImageData(quality: 80)
                }
              }

              portfolioTextLess
              portfolioTextMore
              portfolioTextFliped
              type
              service
              client
              aboutProgram
              portfolioSection {
                portfolioSectionImg {
                  childImageSharp {
                    gatsbyImageData(quality: 100)
                  }
                }
                portfolioSectionTitle
                portfolioSectionText
              }
              portfolioDescription
            }
          }
        }
      }
    }
  `);

  const data = allPortfolios?.portfolioList?.edges.map(
    (item) => item.node.frontmatter
  );

  return data;
};
