import React from "react"

export default function Push({ iconTheme = "#fff", iconTheme2 = "#fff" }) {
  return (
    <svg
      width="50em"
      height="50em"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="0 0 500 500"
    >
      <circle fill={iconTheme} />
      <path
        fill={iconTheme2}
        d="M94.43,54.94c-7.59,10.91-22.58,13.6-33.48,6.01s-25.9-4.9-33.48,6.01"
      />
    </svg>

    // <svg
    //   version="1.1"
    //   id="Layer_1"
    //   x="0px"
    //   y="0px"
    //   viewBox="0 0 121.9 121.9"
    //   style="enable-background:new 0 0 121.9 121.9;"
    // >
    //   <circle cx="60.95" cy="60.95" r="60.95" />
    //   <path
    //     id="st0"
    //     d="M94.43,54.94c-7.59,10.91-22.58,13.6-33.48,6.01s-25.9-4.9-33.48,6.01"
    //   />
    // </svg>
  )
}
