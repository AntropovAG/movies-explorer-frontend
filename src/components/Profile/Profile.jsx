import React from 'react';
import './Profile.css'

function Profile() {
  return (
    <form className="profile-form" name="profile">
      <h2 className="profile-form__label">Привет, Виталий!</h2>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">Имя</p>
        <input className="profile-form__input" id="name-input" type="name" name="name" placeholder=''/>
      </fieldset>
      <span className="profile-form__input-error email-input-error"></span>
      <fieldset className="profile-form__fieldset">
        <p className="profile-form__input-name">E-mail</p>
        <input className="profile-form__input" id="email-input" type="email" name="email" placeholder=''/>
      </fieldset>
      <span className="profile-form__input-error email-input-error"></span>
      <button className="profile-form__authorize-button" type="submit">Редактировать</button>
      <button className="profile-form__signout-button" type="submit">Выйти из аккаунта</button>
    </form>
  )
}

export default Profile
