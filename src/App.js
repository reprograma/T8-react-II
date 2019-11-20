import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PaginaInicial from './paginas/PaginaInicial'
import Contato from './paginas/Contato'
import Chat from './paginas/Chat'
import Nav from './componentes/Nav'

import './App.css'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/contato' component={Contato} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </div>
  )
}

export default App
