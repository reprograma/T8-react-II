import React, { Component } from 'react'

import Agradecimento from './componentes/Agradecimento'
import Inicial from './componentes/Inicial'

import './styles.css'

class Contato extends Component {
  constructor (props) {
    super(props)

    this.state = {
      conteudo: undefined
    }
  }

  handleClick = (proximaPagina) => {
    this.setState({
      conteudo: proximaPagina
    })
  }

  render () {
    return (
      <div className='contato'>
        {this.state.conteudo === undefined && (
          <Inicial onClick={this.handleClick} />
        )}
        {this.state.conteudo === 'final' && <Agradecimento />}
      </div>
    )
  }
}

export default Contato
