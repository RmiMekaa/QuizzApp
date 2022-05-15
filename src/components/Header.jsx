import React from 'react'
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <img className='header__wrapper__logo' src={Logo} alt='logo' width={32} />
      </div>
    </header>
  )
}
