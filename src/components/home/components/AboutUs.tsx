import React, { FC } from "react";
import AboutUsStyle from "assets/styles/components/home/AboutUs.style";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { THomeAboutData } from "types/homeTypes";

const AboutUs: FC<THomeAboutData> = (props) => {
  const { aboutTitle, aboutText, aboutImg } = props;
  return (
    <AboutUsStyle className="about-container">
      <GatsbyImage
        image={getImage(aboutImg)}
        alt={aboutTitle}
        className="w-100"
        loading="lazy"
      />
      <div className="about-description-block">
        <h2>{aboutTitle}</h2>
        <p className="body1">{aboutText}</p>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;
