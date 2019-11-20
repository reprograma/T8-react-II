import React from 'react'
import { Switch, Route } from 'react-router-dom'
// componentes
import Navbar from './componentes/Nav'
// paginas
import Contato from './paginas/Contato'
import Chat from './paginas/Chat'
import Blog from './paginas/Blog'
import PaginaInicial from './paginas/PaginaInicial'

function App () {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/contato' component={Contato} />
        <Route path='/chat' component={Chat} />
        <Route path='/blog' component={Blog} />
      </div>
    </Switch>
  )
}

export default App
