import React from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  const location = useLocation();

  return (
    <header className="header">
          <Link className="header__logo" to="/"/>

      {location.pathname === "/" &&

          <nav className="header__navigation">
            <Link className="header__link " to="/signup">Регистрация</Link>
            <Link className="header__link header__link_color_black" to="/signin"><button className="header__button" type='button'>Войти</button></Link>
          </nav>

      }

      {(location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") &&
          <nav className="header__navigation header__navigation_movie-links">
            <div>
              <NavLink className="header__link header__link_movie-link" to="/movies" activeClassName="header__link_movie-link_active">Фильмы</NavLink>
              <NavLink className="header__link header__link_movie-link" to="/saved-movies" activeClassName="header__link_movie-link_active">Сохранённые фильмы</NavLink>
            </div>
            <Link className="header__link header__link_account-link" to="/profile"><button className="header__button header__button_account-button" type='button'>Аккаунт</button></Link>
          </nav>
      }

    </header>
  )
}

export default Header
