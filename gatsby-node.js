const path = require(`path`);

const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // portfolio template
  const PortfolioPostTemplate = path.resolve(
    `./src/template/portfolioPostTemplate.tsx`
  );
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/our-portfolio/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: PortfolioPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  // job template
  const JobPostTemplate = path.resolve(`./src/template/jobPostTemplate.tsx`);

  const resultJob = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/careers/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (resultJob.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  resultJob.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: JobPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
