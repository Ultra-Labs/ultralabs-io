import React, { FC } from "react";
import HeroStyle from "assets/styles/components/Hero.style";
import { Link } from "gatsby";
import runEffect from "components/home/components/CanvasEffect";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { THomeHero } from "types/homeTypes";

const HomeHero: FC<THomeHero> = ({
  heroTitle,
  heroText,
  className = "",
  mainURL,
  mainURLTitle,
  heroImg,
}) => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    runEffect(canvasRef.current);
  }, []);

  return (
    <HeroStyle className={className}>
      <div className="image-container d-flex">
        {typeof window !== "undefined" && window.innerWidth > 1024 ? (
          <canvas
            ref={canvasRef}
            style={{
              backgroundImage:
                "radial-gradient(ellipse farthest-corner at center top, hsla(230, 100%, 15%, 1) 0%, hsla(231, 90%, 1%, 1) 100%)",
            }}
          />
        ) : (
          <GatsbyImage
            alt={heroTitle}
            objectFit="cover"
            image={getImage(heroImg)}
            className="image-container w-100"
            loading="lazy"
          />
        )}
      </div>

      <div className="hero-container">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1>{heroTitle}</h1>
              <p className="hero-text body1">{heroText}</p>
              {mainURL && (
                <Link to={mainURL} className="hero-link h3">
                  {mainURLTitle}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};

export default HomeHero;
