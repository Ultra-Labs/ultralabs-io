import React, { FC } from "react";
import { TServiceData } from "types/aboutTypes";
import { Link } from "gatsby";

const ServiceList: FC<TServiceData> = (prop) => {
  const { serviceTitle, serviceDescription, serviceList } = prop;
  return (
    <div className="service-container">
      <div className="container">
        <h2>{serviceTitle}</h2>
        <p className="body1">{serviceDescription}</p>

        <ul className="service-list">
          {serviceList.map(
            ({ serviceListTitle, serviceListDescription }, index) => (
              <li key={index}>
                <h3>{serviceListTitle}</h3>
                <p className="body1">{serviceListDescription}</p>
              </li>
            )
          )}
        </ul>

        <Link to="/our-services/">Learn more</Link>
      </div>
    </div>
  );
};

export default ServiceList;
