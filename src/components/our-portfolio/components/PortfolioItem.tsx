import React, { FC } from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

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
        {url ? (
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
        ) : (
          <Link
            state={{ prev: true }}
            to={path}
            className='portfolio-section'
            title={portfolioTitle}
          >
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
          </Link>
        )}
      </div>
    </li>
  );
};

export default PortfolioItem;
