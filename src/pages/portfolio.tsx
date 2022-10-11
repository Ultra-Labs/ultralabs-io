import { Link } from 'gatsby';
import React, { FC } from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import PortfolioStyle from 'assets/styles/components/Portfolio.style';
import { TPortfolioData } from 'types/portfolioTypes';
import Title from 'components/elements/Title/Title';

type PortfolioItemProps = {
  data?: TPortfolioData;
  className?: string;
  tag?: 'h2' | 'h3';
  titleClassName?: 'h2' | 'h3';
};

const PortfolioItem: FC<PortfolioItemProps> = ({
  className = '',
  data,
  tag,
  titleClassName,
}) => {
  if (!data) return null;

  const images = withArtDirection(getImage(data?.portfolioListImg), [
    {
      media: '(max-width: 1024px)',
      image: getImage(data?.portfolioListLargeImg),
    },
    {
      media: '(max-width: 576px)',
      image: getImage(data?.portfolioListSmallImg),
    },
    {
      media: '(max-width: 390px)',
      image: getImage(data?.portfolioListExtraSmallImg),
    },
  ]);

  return (
    <PortfolioStyle className={`portfolio-item ${className}`}>
      <div className='front'>
        <GatsbyImage alt={data?.portfolioTitle} image={images} loading='lazy' />
        <div className='portfolio-desc'>
          <Title tag={tag} className={titleClassName}>
            {data?.portfolioTitle}
          </Title>
          <h4 className='body2 clumb-text-6'>{data?.portfolioTextLess}</h4>
        </div>
      </div>

      <div className='back'>
        <div className='portfolio-more-information body2'>
          <p className='body2 clumb-text-6'>{data?.portfolioTextFliped}</p>
          {data.url ? (
            <a
              href={data.url}
              target='_blank'
              className='portfolio-section w-100'
            >
              Learn more
            </a>
          ) : (
            <Link
              to={data?.path}
              className='portfolio-section'
              title='learn more'
            >
              Learn more
            </Link>
          )}
        </div>
      </div>
    </PortfolioStyle>
  );
};

export default PortfolioItem;
