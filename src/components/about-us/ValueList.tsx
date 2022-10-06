import React, { FC } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TValueData } from "types/aboutTypes";

const ValueList: FC<TValueData> = (prop) => {
  const { valueTitle, valueDescription, valuesList } = prop;
  return (
    <div className="value-container">
      <div className="container">
        <div className="value-inner-container">
          <div className="value-text-block">
            <h2>{valueTitle}</h2>
            <p className="body1">{valueDescription}</p>
          </div>

          <ul className="value-list">
            {valuesList.map((item) => (
              <li key={item.valuesListTitle} className="value-item">
                <div className="box rotateY">
                  <div className="fill">
                    <GatsbyImage
                      image={getImage(item.valuesListImg)}
                      alt={item.valuesListTitle}
                      loading="lazy"
                    />
                    <h3>{item.valuesListTitle}</h3>
                    <p className="body2">{item.valuesListDescription}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValueList;
