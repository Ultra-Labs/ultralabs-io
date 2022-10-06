import LoadingStyle from "assets/styles/components/Loading.style";
import React from "react";

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="outer">
        <div className="middle">
          <div className="inner" />
        </div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
