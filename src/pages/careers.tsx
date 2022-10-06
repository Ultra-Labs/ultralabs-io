import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { FC } from "react";
import JobList from "components/careers/components/JobList";
import Hero from "components/Hero";
import { ImageDataLike } from "gatsby-plugin-image";
import CareersStyle from "assets/styles/components/careers/Careers.style";
import ContactUs from "components/ContactUs";
import { useAllCareers } from "hooks/useAllCareers";
import Description from "components/Description";

type CareersProps = {
  contactImg?: ImageDataLike;
  careersDescription?: string;
};

const Careers: FC<CareersProps> = () => {
  const {
    seoTitle,
    seoDescription,
    heroText,
    heroTitle,
    heroImg,
    careersListTitile,
    careersListDescription,
    careersDescription,
    contactImg,
    contactTitle,
  } = useAllCareers();

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />

      <Hero heroTitle={heroTitle} heroText={heroText} heroImg={heroImg} />
      <CareersStyle>
        <JobList
          careersListTitile={careersListTitile}
          careersListDescription={careersListDescription}
        />

        <Description
          typography="h3"
          variant="blue"
          title={careersDescription}
        />
      </CareersStyle>
      <ContactUs
        dropdownIsVisible
        formName="apply-job-form"
        contactImg={contactImg}
        fileIsVisible
        contactTitle={contactTitle}
      />
    </Layout>
  );
};

export default Careers;
