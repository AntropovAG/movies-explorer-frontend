import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password })
  }

  return (
    <form className="login-form" name="login" onSubmit={handleSubmit}>
      <Link className='login-form__icon' to="/"></Link>
      <h2 className="login-form__label">Рады видеть!</h2>
      <p className="login-form__input-name">E-mail</p>
      <input className="login-form__input" id="email-input" type="email" name="email" onChange={handleEmailChange} placeholder='' required/>
      <span className="login-form__input-error email-input-error"></span>
      <p className="login-form__input-name">Пароль</p>
      <input className="login-form__input" id="password-input" type="password" name="password" onChange={handlePasswordChange} placeholder='' required minLength="2" maxLength="40"/>
      <span className="login-form__input-error"></span>
      <button className="login-form__authorize-button" type="submit">Войти</button>
      <p className="login-form__subscription">Ещё не зарегистрированы? <Link to="/signup" className="login-form__link">Регистрация</Link></p>
    </form>
  )
}

export default Login
