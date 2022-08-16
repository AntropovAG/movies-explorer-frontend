import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ onLogin, message, onMessageReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    onLogin({ email, password });
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
    onMessageReset();
  }, []);

  return (
    <form
      className="login-form"
      name="login"
      onSubmit={handleSubmit}
      noValidate
    >
      <Link className="login-form__icon" to="/"></Link>
      <h2 className="login-form__label">Рады видеть!</h2>
      <p className="login-form__input-name">E-mail</p>
      <input
        className="login-form__input"
        id="email-input"
        type="email"
        name="email"
        onChange={handleEmailChange}
        placeholder=""
        required
      />
      <span className="login-form__input-error email-input-error">
        {emailError}
      </span>
      <p className="login-form__input-name">Пароль</p>
      <input
        className="login-form__input"
        id="password-input"
        type="password"
        name="password"
        onChange={handlePasswordChange}
        placeholder=""
        required
        minLength="2"
        maxLength="40"
      />
      <span className="login-form__input-error">{passwordError}</span>
      <span className="login-form__form-error">{message}</span>
      <button
        className="login-form__authorize-button"
        type="submit"
        disabled={isValidEmail === false || isValidPassword === false}
      >
        Войти
      </button>
      <p className="login-form__subscription">
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="login-form__link">
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
