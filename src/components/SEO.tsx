import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SEOProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  location?: [];
};

const SEO: React.FC<SEOProps> = ({ children, title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { href } = typeof location !== "undefined" ? location : { href: "" };

  return (
    <Helmet titleTemplate={`%s - ${title || site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
      <link
        rel="image_src"
        type="image/webp"
        href="https://ultralabs.am/static/ae045a679615278d3fcc6ec01f7126db/e98d5/logo-ultra-white.webp"
      />
      <title>{title}</title>

      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:image"
        content="https://ultralabs.am/static/ae045a679615278d3fcc6ec01f7126db/e98d5/logo-ultra-white.webp"
      />
      {href && <meta property="og:url" content={href} />}

      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || site.siteMetadata.description}
      />
      <meta
        name="twitter:site_name"
        content={title || site.siteMetadata.title}
      />
      <meta
        name="twitter:image"
        content="https://ultralabs.am/static/ae045a679615278d3fcc6ec01f7126db/e98d5/logo-ultra-white.webp"
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      {children}
    </Helmet>
  );
};

export default SEO;
