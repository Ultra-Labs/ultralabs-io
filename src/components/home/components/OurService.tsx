import React, { FC } from "react";
import OurServiceStyle from "assets/styles/components/home/OurService.style";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { THomeServiceData, THomeServiceList } from "types/homeTypes";

const OurService: FC<THomeServiceData> = (props) => {
  const { serviceTitle, serviceText, serviceList, serviceImg } = props;

  const serviceListData: THomeServiceList[] = serviceList;

  return (
    <OurServiceStyle className="service-container">
      <div className="service-image-container">
        <GatsbyImage
          image={getImage(serviceImg)}
          alt="serviceTitle"
          className="w-100 service-image"
          loading="lazy"
        />
      </div>

      <div className="service-description-block container">
        <div className="service-block d-flex flex-column justify-content-center">
          <h2>{serviceTitle}</h2>
          <p className="body1">{serviceText}</p>
        </div>
        <div className="service-info">
          <ul className="service-items">
            {serviceListData.map((item) => (
              <li key={item.serviceListTitle} className="service-item">
                <h3>{item.serviceListTitle}</h3>
                <p className="body2">{item.serviceListText}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </OurServiceStyle>
  );
};

export default OurService;
