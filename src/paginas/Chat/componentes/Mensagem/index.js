import React from 'react'
import './styles.css'

function Mensagem (props) {
  return (
    <div className='mensagem'>
      <img
        className='mensagem__perfil'
        src={props.mensagem.autora.imagem}
        alt='foto-perfil-usuario'
      />
      <div>
        <h2 className='mensagem__nome'>{props.mensagem.autora.nome}</h2>
        <h3 className='mensagem__subtitulo'>{props.mensagem.subtitulo}</h3>
        <hr />
        <p>{props.mensagem.texto}</p>
      </div>
    </div>
  )
}

export default Mensagem
