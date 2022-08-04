import { React, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css'

function Profile({ onUserUpdate }) {
  const [isDisabled, SetIsDisabled] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();

  function editProfile (evt) {
    evt.preventDefault();
    SetIsDisabled(false);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    onUserUpdate({name, email});
    SetIsDisabled(true);
  }

  function handleNameChange (evt) {
    setName(evt.target.value);
  }

  function handleEmailChange (evt) {
    setEmail(evt.target.value);
  }

  function handleLogOut (evt) {
    evt.preventDefault();
    history.push("/");
  }

  useEffect ( () => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [])

  return (
    <form className="profile-form" name="profile">
      <h2 className="profile-form__label">Привет, Виталий!</h2>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">Имя</p>
        <input className="profile-form__input" id="name-input" type="name" name="name" value={name || ""} onChange={handleNameChange} placeholder='Ваше имя' disabled={isDisabled}/>
      </fieldset>
      <span className="profile-form__input-error email-input-error"></span>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">E-mail</p>
        <input className="profile-form__input" id="email-input" type="email" name="email" value={email || ""} onChange={handleEmailChange} placeholder='Ваше мыло' disabled={isDisabled}/>
      </fieldset>
      <span className="profile-form__input-error email-input-error"></span>
      {isDisabled ?
      <><button className="profile-form__edit-button" type="submit" onClick={editProfile}>Редактировать</button>
        <button className="profile-form__signout-button" type="submit" onClick={handleLogOut}>Выйти из аккаунта</button>
      </> :
      <>
      <span className="profile-form__form-error form-error"></span>
      <button className="profile-form__save-button" type="submit" onClick={handleSubmit} disabled={( !name || !email )}>Сохранить</button>
      </>}

    </form>
  )
}

export default Profile
