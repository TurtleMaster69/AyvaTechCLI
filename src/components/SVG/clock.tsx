import React from 'react'
import type { JSX } from 'react/jsx-runtime'

export default function clock(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
  <svg
    width={29}
    height={29}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.001 17.2666C16.7006 17.2666 17.2677 16.6995 17.2677 15.9999C17.2677 15.3004 16.7006 14.7333 16.001 14.7333C15.3015 14.7333 14.7344 15.3004 14.7344 15.9999C14.7344 16.6995 15.3015 17.2666 16.001 17.2666Z"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 5.81335V16L22.36 22.36"
      stroke="white"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  )
}
