import React from 'react'
import Logo from '../../assets/marvel-logo.png'

function Header (props) {
  return(
    <section className="Header center-align">
      <img src={Logo} alt={Logo} style={{height:235}}/>
    </section>
  )
}

export default Header