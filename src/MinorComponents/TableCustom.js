import React from "react"

export default function GithubSVG({ iconTheme, tableIconSize }) {
  return (
    <svg
      width={tableIconSize}
      height={tableIconSize}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="0 0 500 500"
    >
      <path
        fill={iconTheme}
        d="M250.44,0.12c-138.07,0-250,111.93-250,250s111.93,250,250,250s250-111.93,250-250S388.51,0.12,250.44,0.12z
	 M273.48,402.86h-56.32v-56.32h56.32V402.86z M300.79,251.4c-20.48,20.48-28.59,37.55-28.59,59.31h-54.61
	c0-34.13,10.24-58.03,35.84-83.2c16.64-16.21,23.04-29.01,23.04-44.8c0-19.63-19.2-32.43-49.49-32.43
	c-21.76,0-43.09,5.97-62.72,17.49V110.6c24.32-8.53,49.49-13.23,73.81-13.23c66.56,0,98.56,36.27,98.56,79.79
	C336.63,205.32,326.39,226.22,300.79,251.4z"
      />
    </svg>
  )
}
