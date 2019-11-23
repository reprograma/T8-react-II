import React from 'react'

import './styles.css'

function Header (props) {
  return (
    <section className={props.classeHeader}>
      {props.children}
    </section>
  )
}

export default Header
