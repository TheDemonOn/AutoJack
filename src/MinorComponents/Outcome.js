import React, { useState } from "react"
import Push from "./Push.js"

function Outcome({ textColor, content, effect, iconTheme }) {
  // textColor here is just to indicate which theme is active
  // effect is for positive or negative, or neutral later (push)

  // This would be positive, gold theme
  // background-color: rgba(40, 47, 93, 1);
  // color: aqua;
  // const [result, setResult] = useState()

  // if (effect === "positive") {
  //   switch (textColor["color"]) {
  //     case "#e7bd52": // Gold
  //       setResult(
  //         <YouWon iconTheme={iconTheme} iconTheme2={"#282e42"}></YouWon>
  //       )
  //       break
  //     case "#392950": // Purple
  //       setResult(
  //         <YouWon iconTheme={iconTheme} iconTheme2={"#282e42"}></YouWon>
  //       )
  //       break
  //     case "#c12f2f": // Red
  //       setResult(
  //         <YouWon iconTheme={iconTheme} iconTheme2={"#282e42"}></YouWon>
  //       )
  //       break
  //     case "#48b74d": // Green
  //       setResult(
  //         <YouWon iconTheme={iconTheme} iconTheme2={"#282e42"}></YouWon>
  //       )
  //       break
  //   }
  // } else if (effect === "negative") {
  //   // negative event
  //   switch (textColor["color"]) {
  //     case "#e7bd52": // Gold
  //       setResult(
  //         <YouLost iconTheme={iconTheme} iconTheme2={"#282e42"}></YouLost>
  //       )
  //       break
  //     case "#392950": // Purple
  //       setResult(
  //         <YouLost iconTheme={iconTheme} iconTheme2={"#282e42"}></YouLost>
  //       )
  //       break
  //     case "#c12f2f": // Red
  //       setResult(
  //         <YouLost iconTheme={iconTheme} iconTheme2={"#282e42"}></YouLost>
  //       )
  //       break
  //     case "#48b74d": // Green
  //       setResult(
  //         <YouLost iconTheme={iconTheme} iconTheme2={"#282e42"}></YouLost>
  //       )
  //       break
  //   }
  // } else {
  //   switch (textColor["color"]) {
  //     case "#e7bd52": // Gold
  //       setResult(<Push iconTheme={iconTheme} iconTheme2={"#282e42"}></Push>)
  //       break
  //     case "#392950": // Purple
  //       setResult(<Push iconTheme={iconTheme} iconTheme2={"#282e42"}></Push>)
  //       break
  //     case "#c12f2f": // Red
  //       setResult(<Push iconTheme={iconTheme} iconTheme2={"#282e42"}></Push>)
  //       break
  //     case "#48b74d": // Green
  //       setResult(<Push iconTheme={iconTheme} iconTheme2={"#282e42"}></Push>)
  //       break
  //   }
  // }

  // const [defaultText, setDefaultText] = useState()
  // if (effect === "positive") {
  //   setDefaultText("You won.")
  // } else if (effect === "negative") {
  //   setDefaultText("You lost.")
  // } else {
  //   setDefaultText("Push")
  // }

  return <Push></Push>
}
export default Outcome
