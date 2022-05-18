import React from 'react'
import { useLocation } from 'react-router-dom';
import Logo from '../images/logo.png'

export default function Header() {
  const location = useLocation();

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href="/" className='header__logo'>
          <img src={Logo} alt='logo' width={32} />
        </a>
        {location.pathname !== '/' && <span>Retour au menu</span>}
      </div>
    </header>
  )
}
