import React from "react"

export default function YouWon({ iconTheme, iconTheme2 }) {
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
      <polyline
        iconTheme2={iconTheme2}
        points="32.31,66.51 53.83,84.41 89.59,33.49 "
      />
    </svg>
  )
}
