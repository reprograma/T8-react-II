import React from 'react'
import Header from '../../componentes/Header'
import { getPosts } from '../../service/posts'
import Postagem from './componentes/Postagem'
import './styles.css'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postagens: []
    }
  }

  componentDidMount () {
    getPosts()
      .then(response =>{
        this.setState({
          postagens: response.data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <section>
        <Header classeHeader='blog-header'>
          <h1>Blog</h1>
        </Header>
        <div className='blog-postagens'>
        {this.state.postagens ?
          this.state.postagens.map(postagem => {
            return <Postagem {...postagem} key={postagem.id} />
          })
          : <span>Carregando...</span>
        }
        </div>
      </section>
    )
  }
}

export default Blog

//spread
