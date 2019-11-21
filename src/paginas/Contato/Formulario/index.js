import React from 'react'
import Grupo from './componentes/Grupo'
import Botao from './componentes/Botao'

// props = {
//   mudaConteudo: this.handleMudaConteudo
// }
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

  estaDesabilitado = () => {
    return (
      !this.state.nome.valor ||
      this.state.nome.erro ||
      !this.state.email.valor ||
      this.state.email.erro ||
      !this.state.pais.valor ||
      this.state.pais.erro
    )
  }

  handleSubmit = () => {
    const novoContato = {
      nome: this.state.nome.valor,
      email: this.state.email.valor,
      pais: this.state.pais.valor,
      mensagem: this.state.mensagem.valor
    }
    console.log(novoContato, 'enviou')
  }

  render() {
    const verificaBotao = this.estaDesabilitado()
    //true ou false
    return (
      <div className='pagina'>
        <h2>Entre em contato conosco!</h2>
        <form className='formulario' >
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
          <Botao
            desabilitado={verificaBotao}
            mudaConteudo={this.props.mudaConteudo}
            onSubmit={this.handleSubmit}
            pagina='sucesso'
            type='submit'
          >
            Enviar
          </Botao>

      </form>
    </div>
    )
  }
}

export default Formulario
