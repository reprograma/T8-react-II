import React, { useState, useEffect } from 'react'
import Mensagem from '../../componentes/Mensagens'
import { getMensagens } from '../../service/base'
// Importe de estilo
import './styles.css'

function Chat () {
  const [mensagens, setMensagens] = useState(undefined)

  function handleStatusChange (mensagens) {
    setMensagens(mensagens)
  }

  useEffect(() => {
    setTimeout(
      getMensagens()
        .then(response => {
          console.log(response)
          handleStatusChange(response.data)
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
