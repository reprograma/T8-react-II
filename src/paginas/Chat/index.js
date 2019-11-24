import React, { useState, useEffect } from 'react'
import Mensagem from '../../componentes/Mensagem'
import { getMensagens } from '../../services/mensagens'
// Importe de estilo
import './styles.css'
//Hooks
function Chat () {
  const [mensagens, setMensagens] = useState(undefined)

  useEffect(() => {
    setTimeout(
      getMensagens()
        .then(response => {
          setMensagens(response.data)
        })
        .catch(error => {
          console.error(error)
        }),
      5000
    )
  })

  return (
    <div className='chat'>
      {mensagens ? (
        mensagens.map((item, index) => (
          <Mensagem mensagem={item} key={index + 'mensagem'} />
        ))
      ) : (
        <span>Carregando mensagens :D</span>
      )}
    </div>
  )
}

export default Chat
