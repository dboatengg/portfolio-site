"use client"

import React from "react"

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="32"
        height="32"
        className="stroke-[5] stroke-gray-100 fill-none hover:stroke-white transition-all duration-300"
      >
        {/* Outer balanced circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          className="stroke-neutral-700 transition-colors"
        />

        {/* Stylized “D” curve */}
        <path
          d="M35 25v50c20 0 30-10 30-25S55 25 35 25Z"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* “B” pulse (developer heartbeat line) */}
        <path
          d="M65 40 h5 l3 5 l3 -10 l3 15"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-xl font-semibold tracking-tight text-gray-100 hover:text-white transition-colors duration-300">
        Dickson
      </span>
    </div>
  )
}
