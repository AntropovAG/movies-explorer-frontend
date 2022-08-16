import React from "react";
import "./InfoPopUp.css";

function InfoPopUp({ isOpen, onClose, message }) {
  return (
    <section className={`info-popup ${isOpen && "popup_opened"}`}>
      <div className="info-popup__container">
        <form className="info__form" name="info_popup">
          <h2 className={`info__label info__label_color_${message.color}`}>
            {message.text}
          </h2>
          <button className="info__ok-button" type="button" onClick={onClose}>
            Понятно!
          </button>
        </form>
      </div>
    </section>
  );
}

export default InfoPopUp;
