import { graphql, useStaticQuery } from "gatsby";

export const useServicePage = () => {
  const servicePage = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "services" } }) {
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
          processHeaderTitle
          processList {
            processTitle
            processText
            processImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          servicesDescription
          servicesList {
            servicesTitle
            servicesText
            servicesListDescription
            servicesImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
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
  const data = servicePage?.markdownRemark?.frontmatter;

  return data;
};
