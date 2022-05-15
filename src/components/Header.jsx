import React from 'react'
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <img src={Logo} alt='logo' width={32} />
        </div>
      </div>
    </header>
  )
}
