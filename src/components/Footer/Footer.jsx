import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__links">
        <p className="footer__year">&#64;2022</p>
        <nav className="footer__links_container">
          <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.facebook.com" className="footer__link" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </div>
    </section>
  )
}

export default Footer
