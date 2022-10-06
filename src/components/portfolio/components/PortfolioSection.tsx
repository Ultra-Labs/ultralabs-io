import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { TPortfolioSectionData } from "types/portfolioTypes";

const PortfolioSection: FC<TPortfolioSectionData> = ({
  portfolioSectionImg,
  portfolioSectionTitle,
  portfolioSectionText,
  className = "",
}) => {
  return (
    <div className={`d-flex portfolio-section ${className}`}>
      <GatsbyImage
        alt={portfolioSectionTitle}
        image={getImage(portfolioSectionImg)}
        loading="lazy"
      />
      <div className="portfolio-description">
        <h2 className="h2">{portfolioSectionTitle}</h2>
        <p>{portfolioSectionText}</p>
      </div>
    </div>
  );
};

export default PortfolioSection;
