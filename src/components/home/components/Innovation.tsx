import React, { FC } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Swirl from "components/home/components/swirlEffect";
import { ImageDataLike } from "gatsby-plugin-image";

const Innovation: FC<{
  canvasImg?: ImageDataLike;
  canvasLargeImg?: ImageDataLike;
  canvasSmallImg?: ImageDataLike;
  canvasExtraSmallImg?: ImageDataLike;
  canvasText?: string;
}> = ({ canvasImg, canvasText }) => {
  return (
    <div className="canvas-container">
      {typeof window !== "undefined" && window.innerWidth > 1024 ? (
        <Swirl />
      ) : (
        <GatsbyImage
          alt={canvasText}
          objectFit="cover"
          image={getImage(canvasImg)}
          className="image-container"
          loading="lazy"
        />
      )}
      <div className="text-container">
        <h2>{canvasText}</h2>
      </div>
    </div>
  );
};

export default Innovation;
