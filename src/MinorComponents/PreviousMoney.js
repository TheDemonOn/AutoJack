import React, { useState, useEffect, useRef } from "react"

function PreviousMoney(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
export default PreviousMoney
