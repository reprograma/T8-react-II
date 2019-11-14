import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import Logo from '../../imagens/RocketChat.png'
import './styles.css'

function Nav () {
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          {' '}
          <img
            className='navbar-logo'
            src={Logo}
            alt='Logotipo do RocketChat'
          />
        </Link>
      </div>
      <Menu />
    </nav>
  )
}

export default Nav
