import React, { FC } from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

type PortfolioItemProps = {
  portfolioTitle: string;
  path: string;
  portfolioTextMore: string;
  portfolioListImg: ImageDataLike;
};
const PortfolioItem: FC<PortfolioItemProps> = ({
  portfolioTitle,
  path,
  portfolioTextMore,
  portfolioListImg,
}) => {
  return (
    <li key={portfolioTitle} className="portfolio-item">
      <div className="container">
        <Link
          state={{ prev: true }}
          to={path}
          className="portfolio-section"
          title={portfolioTitle}
        >
          <GatsbyImage
            alt={portfolioTitle}
            objectFit="cover"
            image={getImage(portfolioListImg)}
            loading="lazy"
          />
          <div className="portfolio-desc">
            <h3>{portfolioTitle}</h3>
            <h4 className="body2">{portfolioTextMore}</h4>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default PortfolioItem;
