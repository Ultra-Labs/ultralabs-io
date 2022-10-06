import React from "react";
import Layout from "components/Layout";
import SEO from "components/SEO";
import PortfolioList from "components/home/components/PortfolioList";
import OurService from "components/home/components/OurService";
import AboutUs from "components/home/components/AboutUs";
import OurPeople from "components/home/components/OurPeople";
import ContactUs from "components/ContactUs";
import IndexStyle from "assets/styles/pages/Index.style";
import HomeHero from "components/home/components/Hero";
import { useHomePage } from "hooks/useHomePage";
import { THomeServiceData, THomeAboutData } from "types/homeTypes";
import Description from "components/Description";
import Innovation from "components/home/components/Innovation";

const IndexPage = () => {
  const {
    seoTitle,
    seoDescription,
    heroTitle,
    heroText,
    aboutTitle,
    aboutText,
    aboutImg,
    serviceTitle,
    serviceText,
    serviceList,
    serviceImg,
    canvasText,
    ourQuote,
    ourText,
    ourTitle,
    ourImg,
    contactImg,
    portfolioBlockTitle,
    portfolioBlockText,
    contactTitle,
    heroImg,
    canvasImg,
  } = useHomePage();

  const aboutData: THomeAboutData = { aboutTitle, aboutText, aboutImg };
  const serviceData: THomeServiceData = {
    serviceTitle,
    serviceText,
    serviceImg,
    serviceList,
  };

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
      />
      <IndexStyle>
        <HomeHero
          heroText={heroText}
          heroTitle={heroTitle}
          heroImg={heroImg}
          mainURL="/contact-us/"
          mainURLTitle="Contact us"
          className="home-hero"
        />

        <AboutUs {...aboutData} />

        <OurService {...serviceData} />

        <PortfolioList
          portfolioBlockText={portfolioBlockText}
          portfolioBlockTitle={portfolioBlockTitle}
        />

        <Innovation canvasText={canvasText} canvasImg={canvasImg} />

        <OurPeople
          ourImg={ourImg}
          ourTitle={ourTitle}
          ourText={ourText}
          linkTitle="Get to know us"
          mainURL="/about-us/"
        />
        <Description typography="h3" variant="dark" title={ourQuote} />
      </IndexStyle>
      <ContactUs
        contactImg={contactImg}
        contactTitle={contactTitle}
        formName="contact-us-form"
      />
    </Layout>
  );
};

export default IndexPage;
