import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register({ onRegister, message, onMessageReset }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleNameChange(evt) {
    const validName = /^[a-zA-Zа-яА-Я- ]{2,30}$/.test(evt.target.value);
    setIsValidName(validName);
    if (evt.target.value.length < 1) {
      setNameError("Поле не может быть пустым");
    } else if (evt.target.value.length < 2 || evt.target.value.length > 30) {
      setNameError("Имя не может быть менее 2х и более 30 символов");
    } else if (!validName) {
      setNameError("Имя должно содержать только буквы, пробел или дефис");
    } else {
      setNameError("");
    }
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
      evt.target.value
    );
    setIsValidEmail(validEmail);
    if (evt.target.value.length < 1) {
      setEmailError("Поле не может быть пустым");
    } else if (!validEmail) {
      setEmailError("Email должен быть корректен");
    } else {
      setEmailError("");
    }
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    if (evt.target.value.length < 1) {
      setPasswordError("Поле не может быть пустым");
      setIsValidPassword(false);
    } else {
      setPassword(evt.target.value);
      setIsValidPassword(true);
      setPasswordError("");
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ name, email, password });
  }

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    onMessageReset();
  }, []);

  return (
    <form
      className="register-form"
      name="register"
      onSubmit={handleSubmit}
      noValidate
    >
      <Link className="register-form__icon" to="/"></Link>
      <h2 className="register-form__label">Добро пожаловать!</h2>
      <p className="register-form__input-name">Имя</p>
      <input
        className="register-form__input"
        id="name-input"
        type="name"
        name="name"
        placeholder=""
        minLength="2"
        maxLength="30"
        onChange={handleNameChange}
        required
      />
      <span className="register-form__input-error name-input-error">
        {nameError}
      </span>
      <p className="register-form__input-name">E-mail</p>
      <input
        className="register-form__input"
        id="email-input"
        type="email"
        name="email"
        placeholder=""
        onChange={handleEmailChange}
        required
      />
      <span className="register-form__input-error email-input-error">
        {emailError}
      </span>
      <p className="register-form__input-name">Пароль</p>
      <input
        className="register-form__input"
        id="password-input"
        type="password"
        name="password"
        placeholder=""
        onChange={handlePasswordChange}
        required
        minLength="2"
        maxLength="40"
      />
      <span className="register-form__input-error">{passwordError}</span>
      <span className="register-form__form-error">{message}</span>
      <button
        className="register-form__authorize-button"
        type="submit"
        disabled={
          isValidName === false ||
          isValidEmail === false ||
          isValidPassword === false
        }
      >
        Зарегистрироваться
      </button>
      <p className="register-form__subscription">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register-form__link">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
