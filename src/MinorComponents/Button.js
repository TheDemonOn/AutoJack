import React, { useState } from "react"

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
  return (
    // I can use a class here just to put in info that doesn't change between different themes
    <button id={ID} style={buttonTheme} onClick={func}>
      {content}
    </button>
  )
}
export default Button
