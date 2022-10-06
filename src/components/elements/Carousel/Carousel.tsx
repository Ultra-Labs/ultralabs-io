import { CarouselStyle } from "assets/styles/components/elements/Carusel/Carusel.style";
import { theme } from "constants/variables";
import React, { FC } from "react";
import Slider from "react-slick";
import Icon from "../Icon/Icon";

type CarouselProps = {
  children?: React.ReactNode;
  settings?: React.ReactNode;
};

const Carousel: FC<CarouselProps> = ({ children, settings }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "translate(0,-50%) rotate(180deg)",
        }}
        onClick={onClick}
      >
        <Icon icon="arrow" size={24} color={`${theme.secondaryColor}`} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Icon icon="arrow" size={24} color={`${theme.secondaryColor}`} />
      </div>
    );
  }

  const overalSettings = {
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <CarouselStyle>
      <Slider {...settings} {...overalSettings}>
        {children}
      </Slider>
    </CarouselStyle>
  );
};

export default Carousel;
