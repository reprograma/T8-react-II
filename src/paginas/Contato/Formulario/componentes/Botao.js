import React from 'react'

function Botao (props) {
  let classes = 'botao'

  if (props.desabilitado) {
    classes += ' botao--desabilitado'
  }

  const handleClick = (evento) => {
    evento.preventDefault()
    if (props.type === 'submit') {
      props.onSubmit()
    }
    props.mudaConteudo(props.pagina)
  }
  return (
    <button
      onClick={handleClick}
      className={classes}
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Botao
