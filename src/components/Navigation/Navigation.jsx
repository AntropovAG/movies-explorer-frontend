import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'


function Navigation() {
  return (
    <div className="navigation">
      <div className='navigation__container'>
        <button className="navigation__close-button"></button>
        <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
              <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
              <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
            </li>
            <li className="navigation__item">
            <Link className="navigation__link navigation__link_account-link" to="/profile"><button className="navigation__account-button" type='button'>Аккаунт</button></Link>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Navigation
