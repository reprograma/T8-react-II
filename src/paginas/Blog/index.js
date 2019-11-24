import React from 'react'

import Postagem from '../../componentes/Postagem'
import Header from '../../componentes/Header'

import { getPosts } from '../../services/posts'

import './styles.css'

class Blog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount () {
    setTimeout(
      getPosts()
        .then(response => {
          this.setState({
            posts: response.data
          })
        })
        .catch(error => {
          console.error(error)
        }),
      5000
    )
  }

  render () {
    return (
      <section>
        <Header
          titulo='Blog'
          className='blog-header'
        />
        <div className='blog-postagens'>
          {this.state.posts ? (
            this.state.posts.map((item) => (
              <Postagem postagem={item} key={item.id + 'postagem'} />
            ))
          ) : (
            <span>Carregando postagens :D</span>
          )}
        </div>
      </section>
    )
  }
}

export default Blog
