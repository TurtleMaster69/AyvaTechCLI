import React from 'react'
import type { JSX } from 'react/jsx-runtime'

export default function star1_shape(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
  <svg
    viewBox="-200 0 984 1420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.3} filter="url(#filter0_f_1_46)">
      <path
        d="M-227.831 442.966L-138.261 500.44C66.1572 631.621 145.509 891.593 49.2094 1114.6L6.99441 1212.3L64.4681 1122.73C195.68 918.311 455.621 838.929 678.624 935.26L776.329 977.475L686.759 920.001C482.339 788.789 402.988 528.847 499.319 305.844L541.504 208.171L484.03 297.711C352.819 502.16 92.8758 581.481 -130.126 485.181L-227.831 442.966Z"
        fill="url(#paint0_linear_1_46)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1_46"
        x="0%"
        y="0%"
        width={984}
        height={1420}
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
          stdDeviation={103.748}
          result="effect1_foregroundBlur_1_46"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1_46"
        x1={37.3895}
        y1={1302.6}
        x2={22.9251}
        y2={276.797}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.413362} stopColor="#FF6A00" />
        <stop offset={0.825791} stopColor="#282DBC" />
        <stop offset={1} stopColor="#0011FF" />
      </linearGradient>
    </defs>
  </svg>

  )
}
