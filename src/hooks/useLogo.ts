import { graphql, useStaticQuery } from "gatsby";

export const useLogo = () => {
  const logos = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "logo" } }) {
        frontmatter {
          headerLogoImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          footerLogoImg {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  `);

  const data = logos?.markdownRemark?.frontmatter;

  return data;
};
