import { graphql, useStaticQuery } from "gatsby";

export const useContactPage = () => {
  const contactPage = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "contact" } }) {
        frontmatter {
          seoTitle
          seoDescription
          heroTitle
          heroText
          location
          phoneNumber
          heroImg {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          contactTitle
        }
      }
    }
  `);

  const data = contactPage?.markdownRemark?.frontmatter;

  return data;
};
