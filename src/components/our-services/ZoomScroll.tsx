import ZoomScrollStyle from "assets/styles/components/our-service/ZoomScroll.style";
import React, { FC } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TProcessListData } from "types/serviceTypes";

const ZoomScroll: FC<{
  processData?: TProcessListData[];
  processHeaderTitle?: string;
  className?: string;
}> = ({ processData, processHeaderTitle, className = "" }) => {
  return (
    <ZoomScrollStyle className={`process-section ${className}`}>
      <div className="process-container">
        <ul className="process-list">
          {processData.map(
            ({ processTitle, processText, processImg }, index) => (
              <li
                key={index}
                className={`process-item ${index === 0 ? "active" : ""}`}
              >
                <div className="container">
                  <h2>{processHeaderTitle}</h2>
                  <div className="process-content">
                    <p className="index-class">{`0${index + 1}`}</p>
                    <div className="content">
                      <h3>{processTitle}</h3>
                      <p className="body1">{processText}</p>
                    </div>

                    <GatsbyImage
                      image={getImage(processImg)}
                      alt={processTitle}
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </ZoomScrollStyle>
  );
};

export default ZoomScroll;
