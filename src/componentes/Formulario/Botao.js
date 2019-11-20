import React from 'react'

export default function Botao (props) {
  let classes = props.className

  if (props.desabilitado && props.className === 'botao') {
    classes += ' botao--desabilitado'
  }

  const handleMudaPagina = (e) => {
    e.preventDefault()
    props.onClick('final')
  }

  return (
    <button value={props.value} onClick={handleMudaPagina} className={classes}>
      {props.children}
    </button>
  )
}
