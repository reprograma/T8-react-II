import React from 'react'

function Legenda (props) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

export default Legenda
