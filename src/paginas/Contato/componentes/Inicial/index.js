import React from 'react'
import Grupo from '../../../../componentes/Formulario/Grupo'
import Botao from '../../../../componentes/Formulario/Botao'

class Formulario extends React.Component {
  constructor (props) {
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
      },
      desabilitado: true
    }
  }

  handleChange = (nomeDoInput, valorDoInput, erro = '') => {
    const erroDoInput = erro
    this.setState({ [nomeDoInput]: { valor: valorDoInput, erro: erroDoInput } })
  }

  estaDesabilitado = () => {
    return (
      !this.state.nome.valor ||
      this.state.nome.erro ||
      !this.state.pais.valor ||
      this.state.pais.erro ||
      !this.state.email.valor ||
      this.state.email.erro ||
      !this.state.mensagem.valor ||
      this.state.mensagem.erro
    )
  }

  handleSubmit = e => {
    e.preventDefault()

    const novoContato = {
      nome: this.state.nome.valor,
      pais: this.state.pais.valor,
      email: this.state.email.valor,
      mensagem: this.state.mensagem.valor
    }

    const estaDesabilitado = this.estaDesabilitado()

    if (!estaDesabilitado) {
      // envia novoContato para API
      console.log(novoContato)
    }
  }

  render () {
    const estaDesabilitado = this.estaDesabilitado()

    return (
      <div className='pagina'>
        <h2>Entre em contato conosco! </h2>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <Grupo erro={this.state.nome.erro}>
            <Grupo.Legenda htmlFor='nome'> Nome Completo:</Grupo.Legenda>
            <Grupo.CaixaTexto
              id='nome'
              name='nome'
              placeholder='Digite seu nome'
              type='text'
              required
              minLength={10}
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.email.erro}>
            <Grupo.Legenda htmlFor='email'> Email:</Grupo.Legenda>
            <Grupo.CaixaTexto
              id='email'
              name='email'
              placeholder='Digite seu email'
              type='email'
              required
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.pais.erro}>
            <Grupo.Legenda htmlFor='pais'> País:</Grupo.Legenda>
            <Grupo.CaixaTexto
              id='pais'
              name='pais'
              placeholder='Digite seu país'
              type='text'
              required
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.mensagem.erro}>
            <Grupo.Legenda htmlFor='mensagem'> Comentário:</Grupo.Legenda>
            <Grupo.CaixaTexto
              id='mensagem'
              name='mensagem'
              placeholder='Digite seu comentário'
              type='text'
              required
              onChange={this.handleChange}
            />
          </Grupo>
          <Botao
            desabilitado={estaDesabilitado}
            value={'final'}
            onClick={this.props.onClick}
            className='botao'
          >
            Enviar
          </Botao>
        </form>
      </div>
    )
  }
}

export default Formulario
