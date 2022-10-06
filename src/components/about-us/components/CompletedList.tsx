import React, { FC, useRef } from "react";
import CountUp from "react-countup";
import useIntersection from "hooks/useIntersection";
import { formatNumber } from "utils/formatNumber";
import { TAccompolishData } from "types/aboutTypes";

const CompletedList: FC<TAccompolishData> = ({
  accomplishedTitle,
  accomplishedList,
}) => {
  const ref = useRef();
  const isIntersected = useIntersection(ref);
  return (
    <div className="info-container">
      <div className="container">
        <h2>{accomplishedTitle}</h2>

        <ul className="info-list" ref={ref}>
          {accomplishedList.map(
            ({ accomplishedListTitle, numberCount }, index) => (
              <li key={index} className="info-item numbers">
                <CountUp
                  className="info-number"
                  start={0}
                  end={
                    isIntersected
                      ? numberCount.toString().length < 6
                        ? numberCount
                        : formatNumber(numberCount)?.number
                      : 0
                  }
                  duration={0.95}
                />
                {formatNumber(numberCount) && (
                  <span className="info-number">
                    {formatNumber(numberCount).letter}
                  </span>
                )}
                <p className="body1">{accomplishedListTitle}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CompletedList;
