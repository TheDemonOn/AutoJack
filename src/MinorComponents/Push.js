import React, { useState, useEffect } from "react"

export default function Push({ textColor, iconTheme = "#fff" }) {
  const [output, setOutput] = useState()

  const [iconTheme2, setIconTheme2] = useState()

  useEffect(() => {
    console.log(iconTheme)
    switch (iconTheme) {
      case "#392950": //purple
        setIconTheme2("#ebebf2")
        break
      case "#e7bd52": //gold
        setIconTheme2("#282e42")
        break
      case "#c12f2f": //red
        setIconTheme2("#ffffff")
        break
      case "#48b74d": //green
        setIconTheme2("#2a1f49")
        break
    }
  }, [])

  useEffect(() => {
    console.log(iconTheme2)
    if (iconTheme2) {
      setOutput(
        <div className="resultIcon">
          <svg
            width="10em"
            height="10em"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 121.9 121.9"
          >
            <circle fill={iconTheme} cx="60.95" cy="60.95" r="60.95" />
            <path
              className="st0"
              stroke={iconTheme2}
              d="M94.43,54.94c-7.59,10.91-22.58,13.6-33.48,6.01s-25.9-4.9-33.48,6.01"
            />
          </svg>
          <h7 style={textColor}>Push.</h7>
        </div>
      )
    }
  }, [iconTheme2])

  return <div>{output}</div>
}
