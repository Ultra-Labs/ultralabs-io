import React, { FC } from "react";
import PortfolioStyle from "assets/styles/components/home/Portfolio.style";
import PortfolioItem from "./PortfolioItem";
import { useAllPortfolios } from "hooks/useAllPortfolios";
import { TPortfolioHomeData } from "types/portfolioTypes";
import { THomePortfolioData } from "types/homeTypes";

const PortfolioList: FC<THomePortfolioData> = ({
  portfolioBlockTitle,
  portfolioBlockText,
}) => {
  const newData = useAllPortfolios();
  const portfolioData: TPortfolioHomeData[] = newData;

  return (
    <PortfolioStyle className="portfolio-block">
      <div className="container">
        <h2>{portfolioBlockTitle}</h2>
        <p className="body1">{portfolioBlockText}</p>
      </div>

      <ul className="portfolio-list">
        {portfolioData.slice(0, 4).map((item, index) => (
          <PortfolioItem key={index} data={item} />
        ))}
      </ul>
    </PortfolioStyle>
  );
};

export default PortfolioList;
