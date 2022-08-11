import { React, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css'

function Profile({ onUserUpdate, onSignOut, message, onMessageReset, isDisabled, onDisableChange }) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  console.log(isValidName, isValidEmail)

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
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(evt.target.value);
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

  function editProfile (evt) {
    evt.preventDefault();
    onDisableChange(false);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    onUserUpdate({name, email});
  }

  function handleLogOut (evt) {
    evt.preventDefault();
    onSignOut();
  }

  useEffect (() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    onMessageReset();
  }, [])

  return (
    <form className="profile-form" name="profile">
      <h2 className="profile-form__label">Привет, Виталий!</h2>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">Имя</p>
        <input className="profile-form__input" id="name-input" type="name" name="name" value={name || ""} onChange={handleNameChange} placeholder='Ваше имя' minLength='2' maxLength='30' required disabled={isDisabled}/>
      </fieldset>
      <span className="profile-form__input-error name-input-error">{nameError}</span>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">E-mail</p>
        <input className="profile-form__input" id="email-input" type="email" name="email" value={email || ""} onChange={handleEmailChange} placeholder='Ваше мыло' required disabled={isDisabled}/>
      </fieldset>
      <span className="profile-form__input-error email-input-error">{emailError}</span>
      {isDisabled ?
      <><button className="profile-form__edit-button" type="button" onClick={editProfile}>Редактировать</button>
        <button className="profile-form__signout-button" type="button" onClick={handleLogOut}>Выйти из аккаунта</button>
      </> :
      <>
      <span className="profile-form__form-error form-error">{message}</span>
      <button className="profile-form__save-button" type="submit" onClick={handleSubmit} disabled={( isValidName===false || isValidEmail===false )}>Сохранить</button>
      </>}

    </form>
  )
}

export default Profile
