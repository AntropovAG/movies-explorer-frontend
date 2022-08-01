import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/header-logo.png'

function Header() {

  return (
    <header className="header">
       <img className="header__logo" src={logo} alt="Лого Место"/>
        <nav className="header__navigation">
          <Link className="header__link " to="/signup">Регистрация</Link>
          <Link className="header__link" to="/signin"><button className="header__button" type='button'>Войти</button></Link>
        </nav>

    </header>
  )
}

export default Header
