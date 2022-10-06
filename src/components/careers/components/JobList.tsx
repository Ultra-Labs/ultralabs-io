import React, { FC } from "react";
import JobListStyle from "assets/styles/components/careers/JobList.style";
import { Link } from "gatsby";
import { useCareersList } from "hooks/useCareersList";
import { TCareersList, TCareersListData } from "types/careersTypes";

const JobList: FC<TCareersListData> = ({
  careersListTitile,
  careersListDescription,
}) => {
  const cariersList = useCareersList();
  const carrersListData: TCareersList[] = cariersList;

  return (
    <JobListStyle>
      <div className="container">
        <div className="careers-container">
          <div className="careers-block d-flex flex-column justify-content-center">
            <h2>{careersListTitile}</h2>
            <p className="body1">{careersListDescription}</p>
          </div>
          <div className="careers-list-container">
            <ul className="careers-list">
              {carrersListData.map(
                ({ positionTitle, positionText, path }, index) => (
                  <li key={positionTitle} className="careers-item body1">
                    <div className="header">
                      <span className="body2">{`0${index + 1}`}</span>
                      <span className="h3">{positionTitle}</span>
                    </div>

                    <div className="careers-body">
                      {positionText && <p className="body1">{positionText}</p>}
                      <Link state={{ prev: true }} to={path} title="learn more">
                        Learn more
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </JobListStyle>
  );
};

export default JobList;
