import React from 'react'
import Formulario from './Formulario'
import Sucesso from './Sucesso'

import './styles.css'

// const paginas = {
//   'formulario': {
//     'titulo': 'Entre em contato conosco'
//   },
//   'sucesso': {
//     'titulo': 'Cadastro realizado com sucesso'
//   }
// }

class Contato extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conteudo: 'formulario'
    }
  }

  handleMudaConteudo = (proximaPagina) => {
    this.setState({
      conteudo: proximaPagina
    })
  }

  render () {
    return (
      <section className='contato'>
        {
          this.state.conteudo === 'formulario' &&
          <Formulario
            mudaConteudo={this.handleMudaConteudo}
          />
        }
        {
          this.state.conteudo === 'sucesso' &&
          <Sucesso
            mudaConteudo={this.handleMudaConteudo}
          />
        }
      </section>
    )
  }
}

export default Contato
