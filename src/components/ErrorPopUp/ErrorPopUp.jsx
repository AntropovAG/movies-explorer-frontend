import React from 'react';
import './ErrorPopUp.css'

function ErrorPopUp({ isOpen, onClose }) {
  const error = 'Произошла ошибка';

  return (
    <section className={`error-popup popup_type_error ${isOpen && 'popup_opened'}`}>
      <div className="error-popup__container">
        <form className="error__form" name="error_popup">
          <h2 className="error__label">{error}</h2>
          <button className="error__ok-button" type="button" onClick={onClose}>Понятно!</button>
        </form>
      </div>
    </section>
  )
};

export default ErrorPopUp
