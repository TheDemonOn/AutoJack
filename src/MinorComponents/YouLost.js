import React from "react"

export default function YouLost({ iconTheme, iconTheme2 }) {
  return (
    <svg
      width="10em"
      height="10em"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="0 0 500 500"
    >
      <circle iconTheme={iconTheme} />
      <g>
        <line
          iconTheme2={iconTheme2}
          x1="31.99"
          y1="31.99"
          x2="89.91"
          y2="89.91"
        />
        <line
          iconTheme2={iconTheme2}
          x1="89.91"
          y1="31.99"
          x2="31.99"
          y2="89.91"
        />
      </g>
    </svg>
  )
}
