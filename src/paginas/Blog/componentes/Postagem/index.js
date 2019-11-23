import React from 'react'
import './styles.css'

function Postagem (props) {
  console.log(props)
  return (
    <div className='postagem'>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <button className='botao'>Saiba mais</button>
    </div>
  )
}

export default Postagem
