import * as React from "react";
import type { JSX } from "react/jsx-runtime";
export function SVGComponent(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>){ return(
  <svg
    viewBox="0 0 1172 773"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_6054_577)">
      <path
        d="M911.503 244.831C1143.56 136.463 1274.52 249.772 1311 319.972V573H200C475.016 573 621.433 380.29 911.503 244.831Z"
        fill="url(#paint0_radial_6054_577)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_6054_577"
        x={-20}
        y={-20}
        width={1511}
        height={773}
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
          result="effect1_foregroundBlur_6054_577"
        />
      </filter>
      <radialGradient
        id="paint0_radial_6054_577"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-124.5 -424.906 -1775.67 657.73 807.5 659.327)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.062123} stopColor="#FF6A00" />
        <stop offset={1} stopColor="#0111FF" />
      </radialGradient>
    </defs>
  </svg>
);}
export default SVGComponent;
