import React, { FC } from "react";
import Fade from "react-reveal/Fade";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TServiceListData } from "types/serviceTypes";
import FadeInScrollStyle from "assets/styles/components/our-service/FadeInScroll.style";

const FadeInScroll: FC<{ servicesList: TServiceListData[] }> = ({
  servicesList,
}) => {
  return (
    <FadeInScrollStyle className="container">
      <ul className="service-list">
        {servicesList.map(
          (
            {
              servicesText,
              servicesTitle,
              servicesListDescription,
              servicesImg,
            },
            index
          ) =>
            typeof window !== "undefined" && window.innerWidth > 1024 ? (
              <Fade
                left
                opposite
                cascade
                key={index}
                duration={700}
                timeout={500}
              >
                <li className="service-item previous">
                  <div className="wrapper-container service-part">
                    <p className="body2">{servicesText}</p>
                    <h3>{servicesTitle}</h3>
                  </div>
                  <div className="wrapper-container service-part">
                    <p className="body2">{servicesListDescription}</p>
                  </div>
                  <GatsbyImage
                    image={getImage(servicesImg)}
                    alt={servicesTitle}
                    className="service-part"
                    loading="lazy"
                  />
                </li>
              </Fade>
            ) : (
              <li className="service-item previous" key={index}>
                <div className="wrapper-container service-part">
                  <p className="body2">{servicesText}</p>
                  <h3>{servicesTitle}</h3>
                </div>
                <div className="wrapper-container service-part">
                  <p className="body2">{servicesListDescription}</p>
                </div>
                <GatsbyImage
                  image={getImage(servicesImg)}
                  alt={servicesTitle}
                  className="service-part"
                  loading="lazy"
                />
              </li>
            )
        )}
      </ul>
    </FadeInScrollStyle>
  );
};

export default FadeInScroll;
