import React from 'react'
import Logo from '../../imagens/RocketChat.png'
import Menu from './Menu'

import './styles.css'

function Nav () {
  return (
    <nav className='navbar'>
      <img
        src={Logo}
        alt='Logotipo do Rocketchat'
        className='navbar-logo'
      />
      <Menu />
    </nav>
  )
}

export default Nav
