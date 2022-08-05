import React from 'react'
import './Portfolio.css'
import linkImage from '../../images/portfolio-link.png'

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className='portfolio__link-item'>
          <a href="https://github.com/AntropovAG/how-to-learn" className="portfolio__link" target='_blank' rel="noreferrer">
            <p className="portfolio__link-name">Статичный сайт</p>
            <img className="portfolio__link-image" src={linkImage} alt="Ссылка"/>
           </a>
        </li>
        <li className='portfolio__link-item'>
          <a href="https://github.com/AntropovAG/russian-travel" className="portfolio__link" target='_blank' rel="noreferrer">
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <img className="portfolio__link-image" src={linkImage} alt="Ссылка"/>
           </a>
        </li>
        <li className='portfolio__link-item'>
          <a href="https://github.com/AntropovAG/project-mesto-full" className="portfolio__link" target='_blank' rel="noreferrer">
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <img className="portfolio__link-image" src={linkImage} alt="Ссылка"/>
           </a>
        </li>
      </ul>
  </section>
  )
}

export default Portfolio
