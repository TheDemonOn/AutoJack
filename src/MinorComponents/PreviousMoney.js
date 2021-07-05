import React, {useEffect, useRef } from "react"

// useRef can be used to store a value that does not mutate or reset between unique renders of components allowing a memory
// of values from previous renders. However once the component is unrendered(unmounted) the value is lost.

function PreviousMoney(value) {
  // Here we set the variable we are storing the data in
  const ref = useRef()

  // Every time component is called the value of the useRef variable(object) is reassigned to the new value
  // NOTE: THIS VALUE IS NOT THE RETURNED VALUE OF ref.current because it is asynchronous and doesn't update until after the old value is returned
  useEffect(() => {
    ref.current = value
  })

  // The returned value is what the previous render of this component stored
  // So the first time this component is rendered the returned value is undefined
  return ref.current
}
export default PreviousMoney
