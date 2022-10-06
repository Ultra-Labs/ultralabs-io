import React, { FC } from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "assets/icons/selection.json";

type IconProps = {
  [x: string]: any;
  color?: string;
  size?: string | number;
  className?: string;
  icon: string;
  style?: React.CSSProperties;
};

const Icon: FC<IconProps> = ({ color, size, className, icon, style }) => {
  return (
    <IcomoonReact
      color={color}
      size={size}
      className={className}
      icon={icon}
      style={style}
      iconSet={iconSet}
    />
  );
};

export default Icon;
