import * as React from "react";
import type { JSX } from "react/jsx-runtime";
export function SVGComponent(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {return(
  <svg
    viewBox="0 0 1920 636"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.3} filter="url(#filter0_f_6054_542)">
      <path
        d="M724 435.5C385.5 435.5 74.5 111 -126.5 111V-215H1591.5V94C1280.5 94 1062.5 435.5 724 435.5Z"
        fill="url(#paint0_linear_6054_542)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_6054_542"
        x="-20%"
        y="-20%"
        width={2118}
        height={1050.5}
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={100}
          result="effect1_foregroundBlur_6054_542"
        />
      </filter>
      <linearGradient
        id="paint0_linear_6054_542"
        x1={733}
        y1={-198}
        x2={733}
        y2={592.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#142E8A" />
        <stop offset={1} stopColor="#030717" />
      </linearGradient>
    </defs>
  </svg>
);
}
export default SVGComponent;
