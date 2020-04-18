import React, { useState, useEffect, useRef } from "react"

export default function PreviousBet(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}
