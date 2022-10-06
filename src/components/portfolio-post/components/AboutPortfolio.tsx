import React, { FC } from "react";

const AboutPortfolio: FC<{
  type?: string;
  service?: string;
  client?: string;
  aboutProgram?: string;
}> = ({ type, service, client, aboutProgram }) => {
  return (
    <div className="about-container">
      <div className="container">
        <ul className="about-list">
          <li className="about-item textBody1">{type}</li>
          <li className="about-item textBody1">{service}</li>
          <li className="about-item textBody1">{client}</li>
        </ul>
        <p className="about-block body1">{aboutProgram}</p>
      </div>
    </div>
  );
};

export default AboutPortfolio;
