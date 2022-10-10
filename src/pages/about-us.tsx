import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { FC } from "react";
import Hero from "components/Hero";
import AboutUsStyle from "assets/styles/pages/AboutUs.style";
import { ImageDataLike } from "gatsby-plugin-image";
import Carousel from "components/elements/Carousel/Carousel";
import { useAllPortfolios } from "hooks/useAllPortfolios";
import PortfolioItem from "./portfolio";
import { useAboutPage } from "hooks/useAboutPage";
import {
  TServiceData,
  TValueData,
  // TWorkersData,
} from "types/aboutTypes";
import ServiceList from "components/about-us/components/ServiceList";
import ValueList from "components/about-us/components/ValueList";
import CompletedList from "components/about-us/components/CompletedList";
// import WorkersList from "components/about-us/components/WorkersList";

type AboutUsProps = {
  seoTitle?: string;
  seoDescription?: string;
  aboutDescription?: string;
  valuesListImg?: ImageDataLike;
  portfolioTitle?: string;
  portfolioDescription?: string;
  valuesListLink?: string;
};

const AboutUs: FC<AboutUsProps> = () => {
  const {
    seoTitle,
    seoDescription,
    heroTitle,
    heroText,
    heroImg,
    aboutDescription,
    valueTitle,
    valueDescription,
    valuesList,
    // workersTitle,
    // workersDescription,
    // workersList,
    portfolioTitle,
    portfolioDescription,
    serviceTitle,
    serviceDescription,
    serviceList,
    accomplishedTitle,
    accomplishedList,
  } = useAboutPage();

  const portfolioListData = useAllPortfolios();

  const portfolioSlider = {
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const serviceData: TServiceData = {
    serviceTitle,
    serviceDescription,
    serviceList,
  };

  const valueData: TValueData = {
    valueTitle,
    valueDescription,
    valuesList,
  };

  // const workersData: TWorkersData = {
  //   workersTitle,
  //   workersDescription,
  //   workersList,
  // };

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <Hero heroTitle={heroTitle} heroText={heroText} heroImg={heroImg} />
      <AboutUsStyle>
        <div className="about-container">
          <p className="body1">{aboutDescription}</p>
        </div>
        {!!serviceList.length && <ServiceList {...serviceData} />}

        {!!valuesList.length && <ValueList {...valueData} />}

        {/* {!!workersList.length && <WorkersList {...workersData} />} */}

        {!!accomplishedList.length && (
          <CompletedList
            accomplishedTitle={accomplishedTitle}
            accomplishedList={accomplishedList}
          />
        )}
      </AboutUsStyle>
    </Layout>
  );
};

export default AboutUs;
