import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'


function Navigation({ onClose, isOpen }) {
  return (
    <nav className={`navigation ${isOpen && 'navigation_opened'}`}>
      <div className='navigation__container'>
        <button className="navigation__close-button" type="button" onClick={onClose}></button>
        <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
              <NavLink exact to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
              <NavLink exact to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/profile"><button className="navigation__account-button" type='button'>Аккаунт</button></Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
