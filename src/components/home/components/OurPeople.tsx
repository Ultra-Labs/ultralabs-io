import React, { FC } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import OurPeopleStyle from "assets/styles/components/home/OurPeople.style";
import { Link } from "gatsby";
import { THomePeopleData } from "types/homeTypes";

const OurPeople: FC<THomePeopleData> = ({
  ourImg,
  ourTitle,
  ourText,
  linkTitle,
  className,
  mainURL,
}) => {
  return (
    <OurPeopleStyle className={className}>
      <GatsbyImage
        image={getImage(ourImg)}
        alt={ourTitle}
        className="image-container w-100"
        loading="lazy"
      />

      <div className="people-container">
        <div className="container">
          <div className="people-content">
            <div className="people-left">
              <h2>{ourTitle}</h2>
              <p className="people-text body1">{ourText}</p>

              <Link to={mainURL} className="people-link body2">
                {linkTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </OurPeopleStyle>
  );
};

export default OurPeople;
