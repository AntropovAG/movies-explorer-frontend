import React from 'react'
import './Techs.css'

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <nav className="techs__links">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="techs__link" target="_blank" rel="noreferrer" >HTML</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="techs__link" target="_blank" rel="noreferrer">CSS</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="techs__link" target="_blank" rel="noreferrer">JS</a>
        <a href="https://reactjs.org/" className="techs__link" target="_blank" rel="noreferrer">React</a>
        <a href="https://git-scm.com/" className="techs__link" target="_blank" rel="noreferrer">Git</a>
        <a href="https://expressjs.com/" className="techs__link" target="_blank" rel="noreferrer">Express.js</a>
        <a href="https://www.mongodb.com/" className="techs__link" target="_blank" rel="noreferrer">mongoDB</a>
      </nav>
    </section>
  )
}

export default Techs
