import React from 'react'
import './styles.css'

function Postagens (props) {
  return (
    <div className='postagem'>
      <h3>{props.postagem.title}</h3>
      <p>{props.postagem.body}</p>
      <button className='botao'>Saiba mais</button>
    </div>
  )
}

export default Postagens
