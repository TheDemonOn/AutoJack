import React, { useState, useEffect } from "react"

export default function YouLost({
  textColor,
  iconTheme = "#fff",
  outcomeContent
}) {
  const [output, setOutput] = useState()

  const [iconTheme2, setIconTheme2] = useState()

  const [subText, setSubText] = useState()

  useEffect(() => {
    if (outcomeContent) {
      setSubText(
        <div>
          <div className="outcomeBackground">
            <h9 style={textColor}>{outcomeContent}</h9>
          </div>
          <div className="effectResult">
            <h8 style={textColor}>You lost.</h8>
          </div>
        </div>
      )
    } else {
      setSubText(
        <div className="outcomeBackground">
          <h7 style={textColor}>You lost.</h7>
        </div>
      )
    }
  }, [])

  useEffect(() => {
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
    if (iconTheme2 && subText) {
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
            <g>
              <line
                className="st0"
                stroke={iconTheme2}
                x1="31.99"
                y1="31.99"
                x2="89.91"
                y2="89.91"
              />
              <line
                className="st0"
                stroke={iconTheme2}
                x1="89.91"
                y1="31.99"
                x2="31.99"
                y2="89.91"
              />
            </g>
          </svg>

          {subText}
        </div>
      )
    }
  }, [iconTheme2, subText])

  return <div>{output}</div>
}
