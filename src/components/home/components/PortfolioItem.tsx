import { Link } from 'gatsby';
import React, { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TPortfolioHomeData } from 'types/portfolioTypes';

type PortfolioItemProps = {
  data?: TPortfolioHomeData;
};

const PortfolioItem: FC<PortfolioItemProps> = ({ data }) => {
  const { portfolioTitle, url, path, portfolioImg, portfolioTextMore } = data;
  return (
    <li className='portfolio-item'>
      {url ? (
        <a href={url} target='_blank' className='portfolio-section w-100'>
          <div className='container'>
            <div className='portfolio-container'>
              <GatsbyImage
                alt={portfolioTitle}
                image={getImage(portfolioImg)}
                className='portfolio-image'
                loading='lazy'
              />
              <div className='portfolio-desc'>
                <h3>{portfolioTitle}</h3>
                <h4 className='body2'>{portfolioTextMore}</h4>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <Link
          state={{ prev: true }}
          to={path}
          className='portfolio-section w-100'
        >
          <div className='container'>
            <div className='portfolio-container'>
              <GatsbyImage
                alt={portfolioTitle}
                image={getImage(portfolioImg)}
                className='portfolio-image'
                loading='lazy'
              />
              <div className='portfolio-desc'>
                <h3>{portfolioTitle}</h3>
                <h4 className='body2'>{portfolioTextMore}</h4>
              </div>
            </div>
          </div>
        </Link>
      )}
    </li>
  );
};

export default PortfolioItem;
