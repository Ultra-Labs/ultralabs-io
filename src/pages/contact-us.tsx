import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { FC } from "react";
import ContactUsStyle from "assets/styles/pages/ContacUs.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Icon from "components/elements/Icon/Icon";
import { theme } from "constants/variables";
import ContactForm from "components/ContactForm";
import { useContactPage } from "hooks/useContactPage";

type ContactUsProps = {
  location?: string;
  phoneNumber?: string;
};

const ContactUs: FC<ContactUsProps> = () => {
  const {
    heroTitle,
    heroText,
    heroImg,
    location,
    phoneNumber,
    seoTitle,
    seoDescription,
    contactTitle,
  } = useContactPage();

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <ContactUsStyle className="contact-us-page">
        <GatsbyImage
          alt={heroTitle}
          objectFit="cover"
          image={getImage(heroImg)}
          className="image-container"
          loading="lazy"
        />
        <div className="hero-container">
          <div className="container hero-wrapper">
            <div className="hero-content">
              <div className="hero-left">
                <h1>{heroTitle}</h1>
                <p className="hero-text body1">{heroText}</p>
                {location && (
                  <p className="body1 connection">
                    <Icon
                      icon="location"
                      size={24}
                      color={`${theme.lightColor}`}
                    />
                    {location}
                  </p>
                )}
                {phoneNumber && (
                  <a href={`tel: ${phoneNumber}`} className="body1 connection">
                    <Icon
                      icon="phone"
                      size={24}
                      color={`${theme.lightColor}`}
                    />
                    {phoneNumber}
                  </a>
                )}
              </div>
            </div>
            <ContactForm
              contactTitle={contactTitle}
              formName="contact-us-form"
              dropdownIsVisible={false}
              fileIsVisible={false}
              wrapperClassName="form-inner-container"
              wrapperContainerClassName="form-wrapper-container"
            />
          </div>
        </div>
      </ContactUsStyle>
    </Layout>
  );
};

export default ContactUs;
