import React, { FC } from "react";
import { TWorkersData } from "types/aboutTypes";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const WorkersList: FC<TWorkersData> = (prop) => {
  const { workersTitle, workersDescription, workersList } = prop;
  return (
    <div className="workers-container">
      <div className="container">
        <h2>{workersTitle}</h2>
        <p className="body1">{workersDescription}</p>

        <ul className="workers-list">
          {workersList.map((item) => (
            <li key={item.workersListTitle} className="workers-item">
              <GatsbyImage
                image={getImage(item.workersListImg)}
                alt={item.workersListTitle}
                loading="lazy"
              />
              <h3>{item.workersListTitle}</h3>
              <h4 className="body2">{item.workersListDescription}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkersList;
