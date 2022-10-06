import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import SEO from "components/SEO";
import Layout from "components/Layout";
import Hero from "components/Hero";
import PortfolioSection from "components/portfolio/components/PortfolioSection";
import PortfolioStyle from "assets/styles/pages/Portfolio.style";
import Carousel from "components/elements/Carousel/Carousel";
import { useAllPortfolios } from "hooks/useAllPortfolios";
import PortfolioItem from "pages/portfolio";
import { TPortfolioPageData } from "types/portfolioTypes";
import { TPortfolioFilterItem } from "types/portfolioTypes";
import { useLocation } from "@reach/router";
import Description from "components/Description";
import AboutPortfolio from "components/portfolio-post/components/AboutPortfolio";

const PortfolioPost: FC<TPortfolioPageData> = ({ data }) => {
  const location = useLocation();
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const {
    seoDescription,
    seoTitle,
    heroTitle,
    heroText,
    heroImg,
    heroLargeImg,
    heroSmallImg,
    heroExtraSmallImg,
    type,
    service,
    client,
    aboutProgram,
    portfolioSection,
    portfolioDescription,
  } = frontmatter;

  const portfolioListData = useAllPortfolios();

  let delimiter = "/",
    start = 2,
    tokens = location.pathname.split(delimiter).slice(start);

  const filteredData: TPortfolioFilterItem[] = portfolioListData.filter(
    (item) => item.portfolioTitle !== tokens[0]
  );

  const portfolioSlider = {
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <PortfolioStyle>
        <Hero heroTitle={heroTitle} heroText={heroText} heroImg={heroImg} />
        <AboutPortfolio
          type={type}
          service={service}
          client={client}
          aboutProgram={aboutProgram}
        />
        <div className="portfolio-list-section">
          {portfolioSection.map(
            ({
              portfolioSectionImg,
              portfolioSectionTitle,
              portfolioSectionText,
            }) => (
              <PortfolioSection
                key={portfolioSectionTitle}
                portfolioSectionImg={portfolioSectionImg}
                portfolioSectionTitle={portfolioSectionTitle}
                portfolioSectionText={portfolioSectionText}
              />
            )
          )}
        </div>

        {!!filteredData.length && (
          <div className="portfolio-block">
            <div className="container">
              <Carousel settings={portfolioSlider}>
                {filteredData.map((item) => (
                  <PortfolioItem
                    className="caroucel-item"
                    key={item.path}
                    data={item}
                    tag="h3"
                    titleClassName="h3"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        )}

        <Description
          variant="dark"
          title={portfolioDescription}
          typography="h2"
          link="/contact-us/"
          linkTitle="Let's get started"
        />
      </PortfolioStyle>
    </Layout>
  );
};

export default PortfolioPost;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        seoDescription
        seoTitle
        title
        path
        category
        heroTitle
        heroText
        portfolioTitle
        portfolioTextLess
        portfolioTextMore
        type
        service
        client
        aboutProgram
        heroImg {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        heroLargeImg {
          childImageSharp {
            gatsbyImageData(quality: 40)
          }
        }
        heroSmallImg {
          childImageSharp {
            gatsbyImageData(quality: 40)
          }
        }
        heroExtraSmallImg {
          childImageSharp {
            gatsbyImageData(quality: 30)
          }
        }
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
`;
