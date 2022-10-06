import React, { FC } from "react";
import Icon from "components/elements/Icon/Icon";
import { theme } from "constants/variables";
import { TCareersSectionData } from "types/careersTypes";
import scrollTo from "gatsby-plugin-smoothscroll";

const JobDescription: FC<{
  html?: string;
  moreData?: TCareersSectionData[];
  path?: string;
  positionTitle?: string;
}> = ({ html, moreData, path, positionTitle }) => {
  const baseURL = "https://www.ultralabs.am";
  const fbShare =
    "https://www.facebook.com/sharer/sharer.php?u=" + baseURL + path;
  const twitterShare =
    "https://twitter.com/share?url=" +
    baseURL +
    path +
    "&text=" +
    positionTitle +
    "&via" +
    "twitterHandle";
  const inShare = "https://linkedin.com/shareArticle?url=" + baseURL + path;
  return (
    <div className="container">
      <div className="job-container">
        <div
          className="html-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="more-container">
          <div className="scrolled-container">
            <div className="more-details">
              {moreData.map(({ moreTitle, moreListText }) => (
                <div key={moreTitle} className="more-item">
                  <h4>{moreTitle}</h4>
                  {moreListText && (
                    <ul className="details-list">
                      {moreListText.map(({ moreText }) => (
                        <li key={moreText}>{moreText}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <button
              className="apply-link body2"
              onClick={() => scrollTo("#apply-link")}
            >
              Apply now
            </button>
            <h3 className="body1">Share this job</h3>
            <div className="social-group">
              <a
                href={inShare}
                target="_blank"
                rel="noopener noreferrer"
                title="click here"
              >
                <Icon icon="linkedin1" size={48} color={theme.linkColor} />
              </a>
              <a
                href={fbShare}
                target="_blank"
                rel="noopener noreferrer"
                title="click here"
              >
                <Icon icon="facebook1" size={48} color={theme.linkColor} />
              </a>
              <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
                title="click here"
              >
                <Icon icon="twitter1" size={48} color={theme.linkColor} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
