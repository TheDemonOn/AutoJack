import React, { useState, useEffect } from "react"
import Push from "./Push.js"
import YouWon from "./YouWon.js"
import YouLost from "./YouLost.js"

function Outcome({ textColor, outcomeContent, outcomeEffect, iconTheme }) {
  // By setting the initial value of the eventual output "null" it will display nothing
  // until it is changed
  const [result, setResult] = useState(null)

  useEffect(() => {
    switch (outcomeEffect) {
      case "positive":
        setResult(
          <YouWon
            textColor={textColor}
            iconTheme={iconTheme}
            outcomeContent={outcomeContent}
          ></YouWon>
        )
        break
      case "negative":
        setResult(
          <YouLost
            textColor={textColor}
            iconTheme={iconTheme}
            outcomeContent={outcomeContent}
          ></YouLost>
        )
        break
      case "neutral":
        setResult(<Push textColor={textColor} iconTheme={iconTheme}></Push>)
    }
  }, [])

  return result
}
export default Outcome
