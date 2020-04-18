import React from "react"

export default function AddAnimation({ playerBet, textColor }) {
  return (
    <div className="addCss" style={textColor}>
      +{playerBet}
    </div>
  )
}
