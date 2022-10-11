import React, { FC } from 'react';
import PortfolioListStyle from 'assets/styles/components/our-portfolio/PortfolioList.style';
import PortfolioItem from 'pages/portfolio';
import { TPortfolioFilterItem } from 'types/portfolioTypes';
// import { Link } from "gatsby";
// import { useLocation } from "@reach/router";

const PortfolioList: FC<{ filteredData: TPortfolioFilterItem[] }> = ({
  // categoryList,
  filteredData,
}) => {
  // const location = useLocation();
  return (
    <PortfolioListStyle>
      <div className='container'>
        {/* <ul className="category-list">
          <li
            className={`category-item h3 ${!location.search ? "active" : ""}`}
          >
            <Link to="/our-portfolio/">all</Link>
          </li>
          {categoryList.map((category, index) => (
            <li
              key={index}
              className={`category-item h3 ${
                location.search === `?${category}` ? "active" : ""
              }`}
            >
              <Link to={`?${category}`} replace={false}>
                {category}
              </Link>
            </li>
          ))}
        </ul> */}
        <ul className='portfolio-list'>
          {filteredData.map((item) => (
            <PortfolioItem
              key={item.url}
              data={item}
              tag='h2'
              titleClassName='h3'
            />
          ))}
        </ul>
      </div>
    </PortfolioListStyle>
  );
};

export default PortfolioList;
