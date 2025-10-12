import * as React from "react";
import type { JSX } from "react/jsx-runtime";
export function LShape(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>){ return(
  <svg
    viewBox="-220 0 1100 1020"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.3} filter="url(#filter0_f_1_84)">
      <path
        d="M413.531 377.638C443.955 504.273 536.482 493.276 578.941 471.948C887.31 478.975 802.545 648.735 781.009 765.236C759.474 881.738 437.816 787.427 380.083 712.348C322.35 637.269 123.031 675.733 -100.113 648.735C-323.257 621.736 -168.385 377.638 -112.484 257.438C-56.5839 137.238 375.5 219.344 413.531 377.638Z"
        fill="url(#paint0_radial_1_84)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1_84"
        x={-20}
        y={-20}
        width={1425}
        height={1020}
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
          result="effect1_foregroundBlur_1_84"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1_84"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(387.776 -747.847 1393.93 1595.94 247.525 963.493)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.062123} stopColor="#FF6A00" />
        <stop offset={1} stopColor="#0111FF" />
      </radialGradient>
    </defs>
  </svg>

);}
export default LShape;