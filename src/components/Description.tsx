import { DescriptionStyle } from "assets/styles/components/Description.style";
import React, { FC } from "react";
import { Link } from "gatsby";
import Title from "./elements/Title/Title";

export type DescriptionProps = {
  className?: string;
  typography: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "dark" | "blue";
  link?: string;
  linkTitle?: string;
  title: string;
};

const Description: FC<DescriptionProps> = ({
  className,
  typography,
  variant,
  link,
  linkTitle,
  title,
}) => {
  return (
    <DescriptionStyle
      className={className}
      typography={typography}
      variant={variant}
      link={link}
    >
      <div className="container">
        <div className="text-description text-center">
          <Title tag={typography} className={typography}>
            {title}
          </Title>
          {link && (
            <Link to={link} className="body2">
              {linkTitle}
            </Link>
          )}
        </div>
      </div>
    </DescriptionStyle>
  );
};

export default Description;
