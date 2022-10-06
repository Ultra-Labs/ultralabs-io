import { graphql, useStaticQuery } from "gatsby";

export const useAboutPage = () => {
  const aboutPage = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "about" } }) {
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
          aboutDescription
          valueTitle
          valueDescription
          valuesList {
            valuesListImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            valuesListTitle
            valuesListDescription
          }
          workersTitle
          workersDescription
          workersList {
            workersListTitle
            workersListDescription
            workersListImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          clientsTitle
          clientsDescription
          clientsListImage {
            valuesListImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            valuesListLink
          }
          serviceTitle
          serviceDescription
          serviceList {
            serviceListTitle
            serviceListDescription
          }
          portfolioTitle
          portfolioDescription
          accomplishedTitle
          accomplishedList {
            accomplishedListTitle
            numberCount
          }
        }
      }
    }
  `);

  const data = aboutPage?.markdownRemark?.frontmatter;

  return data;
};
