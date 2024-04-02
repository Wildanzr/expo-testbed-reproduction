/* eslint-disable max-len */
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  active?: boolean;
  color?: string;
  dark?: boolean;
  width?: number;
  height?: number;
}

const Back = ({
  dark,
  color,
  width = 40,
  height = 40,
}: IconProps): React.ReactNode => {
  const iconColor = color ?? "white";

  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.0026 36.6673C29.2074 36.6673 36.6693 29.2054 36.6693 20.0007C36.6693 10.7959 29.2074 3.33398 20.0026 3.33398C10.7979 3.33398 3.33594 10.7959 3.33594 20.0007C3.33594 29.2054 10.7979 36.6673 20.0026 36.6673Z" 
    stroke=${
      dark ? "black" : iconColor
    } stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.101 25.8829L16.2344 19.9995L22.101 14.1162" stroke=${
      dark ? "black" : iconColor
    } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default Back;
