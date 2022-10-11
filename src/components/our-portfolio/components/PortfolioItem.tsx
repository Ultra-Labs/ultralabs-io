import React, { FC } from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

type PortfolioItemProps = {
  portfolioTitle: string;
  portfolioTextMore: string;
  portfolioListImg: ImageDataLike;
  url: string;
};
const PortfolioItem: FC<PortfolioItemProps> = ({
  portfolioTitle,
  url,
  portfolioTextMore,
  portfolioListImg,
}) => {
  return (
    <li key={portfolioTitle} className='portfolio-item'>
      <div className='container'>
        <a href={url} className='portfolio-section' title={portfolioTitle}>
          <GatsbyImage
            alt={portfolioTitle}
            objectFit='cover'
            image={getImage(portfolioListImg)}
            loading='lazy'
          />
          <div className='portfolio-desc'>
            <h3>{portfolioTitle}</h3>
            <h4 className='body2'>{portfolioTextMore}</h4>
          </div>
        </a>
      </div>
    </li>
  );
};

export default PortfolioItem;
