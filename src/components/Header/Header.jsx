import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import "./Header.css";

function Header({ onClick, isLoggedIn, windowWidth }) {
  const location = useLocation();

  return (
    <header className="header">
      <Link className="header__logo" to="/" />

      {!isLoggedIn && location.pathname === "/" && (
        <nav className="header-navigation">
          <Link className="header__link " to="/signup">
            Регистрация
          </Link>
          <Link className="header__link" to="/signin">
            <button className="header__button" type="button">
              Войти
            </button>
          </Link>
        </nav>
      )}

      {isLoggedIn && windowWidth.width > 1070 && (
        <nav className="header-navigation header-navigation_type_movie-links">
          <div>
            <NavLink
              className="header__link header__link_type_movie-link"
              to="/movies"
              activeClassName="header__link_type_movie-link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__link header__link_type_movie-link"
              to="/saved-movies"
              activeClassName="header__link_type_movie-link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link
            className="header__link header__link_type_account-link"
            to="/profile"
          >
            <button
              className="header__button header__button_type_account-button"
              type="button"
            >
              Аккаунт
            </button>
          </Link>
        </nav>
      )}

      {isLoggedIn && windowWidth.width < 1070 && (
        <nav className="header__navigation header__navigation_type_burger">
          <button
            className="header__button header__button_type_burger"
            type="button"
            onClick={onClick}
          ></button>
        </nav>
      )}
    </header>
  );
}

export default Header;
