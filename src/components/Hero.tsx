import React, { FC } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { THeroData } from "types/heroTypes";
import HeroStyle from "assets/styles/components/Hero.style";

const Hero: FC<THeroData> = ({
  heroTitle,
  heroText,
  heroImg,
  className = "",
  mainURL,
  mainURLTitle,
}) => {
  return (
    <HeroStyle className={className}>
      <GatsbyImage
        alt={heroTitle}
        objectFit="cover"
        image={getImage(heroImg)}
        className="image-container"
        loading="eager"
      />
      <div className="hero-container">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1>{heroTitle}</h1>
              {heroText && (
                <p className="hero-text body1">{heroText}</p>
              )}
              {mainURL && (
                <Link to={mainURL} className="hero-link h3">
                  {mainURLTitle}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
