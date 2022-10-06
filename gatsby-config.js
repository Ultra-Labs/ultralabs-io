module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ultralabs.am",
    title: "Ultralabs Armenia",
    description: "Software built by people for people",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-transformer-sharp",
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ultralabs.am",
        sitemap: "https://www.ultralabs.am/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          placeholder: "none",
          backgroundColor: "transparent",
          breakpoints: [390, 576, 1024, 1920],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4148ED`,
        theme_color: `#4148ED`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-list`,
        path: `${__dirname}/src/markdown-pages/portfolio-list`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `position-page`,
        path: `${__dirname}/src/markdown-pages/position-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-page`,
        path: `${__dirname}/src/markdown-pages/home-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-page`,
        path: `${__dirname}/src/markdown-pages/portfolio-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `careers-page`,
        path: `${__dirname}/src/markdown-pages/careers-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact-page`,
        path: `${__dirname}/src/markdown-pages/contact-page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services-page`,
        path: `${__dirname}/src/markdown-pages/services-page`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/markdown-pages/logo`,
      },
    },

    // for image lazy loading
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
  ],
};
