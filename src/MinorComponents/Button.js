import React, { useState, useEffect } from "react"

// The imported theme will contain all the information related to color
// theme should be an object where the parameters are camelCase and the values be in parentheses
// separated by commas

// Example:
// color: "white",
// backgroundColor: "DodgerBlue",
// padding: "10px",
// fontFamily: "Arial"

// Content should be the text

function Button({ buttonTheme, content, ID, func }) {
  const [className, setClassName] = useState()

  useEffect(() => {
    switch (buttonTheme.backgroundColor) {
      case "rgba(40, 47, 93, .5)":
        setClassName("hoverTheme1")
        break
      case "#392950":
        setClassName("hoverTheme2")
        break
      case "rgba(244, 244, 244, .2)":
        setClassName("hoverTheme3")
        break
      case "rgba(42, 31, 73, .5)":
        setClassName("hoverTheme4")
        break
      default:
        setClassName("hoverThemeActive")
    }
  }, [buttonTheme])
  return (
    // I can use a class here just to put in info that doesn't change between different themes
    <button className={className} id={ID} style={buttonTheme} onClick={func}>
      {content}
    </button>
  )
}
export default Button
