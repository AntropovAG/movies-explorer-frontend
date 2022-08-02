import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {

  return (
    <form className="login-form" name="login">
      <Link className='login-form__icon' to="/"></Link>
      <h2 className="login-form__label">Рады видеть!</h2>
      <p className="login-form__input-name">E-mail</p>
      <input className="login-form__input" id="email-input" type="email" name="email" placeholder='' required/>
      <span className="login-form__input-error email-input-error"></span>
      <p className="login-form__input-name">Пароль</p>
      <input className="login-form__input" id="password-input" type="password" name="password" placeholder='' required minLength="2" maxLength="40"/>
      <span className="login-form__input-error"></span>
      <button className="login-form__authorize-button" type="submit">Войти</button>
      <p className="login-form__subscription">Ещё не зарегистрированы? <Link to="/signup" className="login-form__link">Регистрация</Link></p>
    </form>
  )
}

export default Login
