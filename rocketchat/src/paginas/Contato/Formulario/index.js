import React from 'react'
import Grupo from './Grupo'

class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: {
        valor: '',
        erro: ''
      },
      email: {
        valor: '',
        erro: ''
      },
      pais: {
        valor: '',
        erro: ''
      },
      mensagem: {
        valor: '',
        erro: ''
      }
    }
  }

  handleChange = (nomeDoCampo, valorDoCampo, erroDoCampo = '') => {
    this.setState({
      [nomeDoCampo]: {
        valor: valorDoCampo,
        erro: erroDoCampo
      }
    })
  }

  render() {
    return (
      <div className='pagina'>
        <h2>Entre em contato conosco!</h2>
        <form className='formulario'>
          <Grupo erro={this.state.nome.erro} >
            <Grupo.Legenda htmlFor='nome'> Nome Completo: </Grupo.Legenda>
            <Grupo.CaixaTexto
               name='nome'
               placeholder='Digite seu nome'
               mudaEstado={this.handleChange}
               minLength={10}
               required
               type='text'
            />
          </Grupo>
          <Grupo erro={this.state.email.erro} >
            <Grupo.Legenda htmlFor='email'> Email: </Grupo.Legenda>
            <Grupo.CaixaTexto
               name='email'
               placeholder='Digite seu email'
               mudaEstado={this.handleChange}
               required
               type='email'
            />
          </Grupo>
          <Grupo erro={this.state.pais.erro} >
            <Grupo.Legenda htmlFor='pais'> País: </Grupo.Legenda>
            <Grupo.CaixaTexto
               name='pais'
               placeholder='Digite seu país'
               mudaEstado={this.handleChange}
               required
               type='text'
            />
          </Grupo>
          <Grupo erro={this.state.mensagem.erro} >
            <Grupo.Legenda htmlFor='mensagem'> Mensagem: </Grupo.Legenda>
            <Grupo.CaixaTexto
               name='mensagem'
               placeholder='Digite sua mensagem'
               mudaEstado={this.handleChange}
               type='text'
            />
          </Grupo>
      </form>
    </div>
    )
  }
}

export default Formulario
