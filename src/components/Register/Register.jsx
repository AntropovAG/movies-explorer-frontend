import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {

  return (
    <form className="register-form" name="register">
      <Link className='register-form__icon' to="/"></Link>
      <h2 className="register-form__label">Добро пожаловать!</h2>
      <p className="register-form__input-name">Имя</p>
      <input className="register-form__input" id="name-input" type="email" name="email" placeholder='' required/>
      <span className="register-form__input-error email-input-error"></span>
      <p className="register-form__input-name">E-mail</p>
      <input className="register-form__input" id="email-input" type="email" name="email" placeholder='' required/>
      <span className="register-form__input-error email-input-error"></span>
      <p className="register-form__input-name">Пароль</p>
      <input className="register-form__input" id="password-input" type="password" name="password" placeholder='' required minLength="2" maxLength="40"/>
      <span className="register-form__input-error">Что-то пошло не так...</span>
      <button className="register-form__authorize-button" type="submit">Зарегистрироваться</button>
      <p className="register-form__subscription">Уже зарегистрированы? <Link to="/signin" className="register-form__link">Войти</Link></p>
    </form>
  )
}

export default Register
