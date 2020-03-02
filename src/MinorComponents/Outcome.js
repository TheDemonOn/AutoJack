import React, { useState } from "react"

function Outcome({ textColor, content, effect }) {
  // textColor here is just to indicate which theme is active
  // effect is for positive or negative, or neutral later (push)

  // This would be positive, gold theme
  // background-color: rgba(40, 47, 93, 1);
  // color: aqua;

  if (effect === "positive") {
    switch (textColor["color"]) {
      case "#e7bd52": // Gold
        let z = document.getElementsByClassName("boxPosition")
        z[0].style.backgroundColor = "rgba(40, 47, 93, 1)"
        z[0].style.color = "aqua"
        break
      case "#392950": // Purple
        //
        break
      case "#c12f2f": // Red
        //
        break
      case "#48b74d": // Green
        //
        break
    }
  }

  return (
    <div className="boxPosition" id={"outcomeId"}>
      <p className="outcomeClass resultText">{content}</p>
    </div>
  )
}
export default Outcome
