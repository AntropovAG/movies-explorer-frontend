import React from 'react'
import './AboutMe.css'
import photo from '../../images/profile-photo.png';

function AboutMe() {
  return (
    <section className="student-profile" id="AboutMe">
      <h2 className="student-profile__header">Студент</h2>
      <div className="student-profile__info-container">
        <div className="student-profile__info">
          <h3 className="student-profile__name">Антон</h3>
          <p className="student-profile__occupation">Веб-разработчик, 37 лет</p>
          <p className="student-profile__description">Я родился в Самаре, рос в Магадане, но большую часть жизни жил в Москве.
          По образованию и професии пока юрист. Всегда хотел попробовать написать какой-то код, сделать страничку, чтобы всё было красиво и вот она возможность - взялся за неё и теперь рад, что не упустил.
          Уверен, что всё сложится и будет очень интересно!</p>
          <nav className="student-profile__links">
            <a href="https://www.facebook.com/anton.antropov.3" className="student-profile__link" target='_blank' rel="noreferrer">Facebook</a>
            <a href="https://github.com/AntropovAG" className="student-profile__link" target='_blank' rel="noreferrer">Github</a>
          </nav>
        </div>
        <img src={photo} alt="Фото студента" className="student-profile__photo"></img>
      </div>
    </section>
  )
}

export default AboutMe
