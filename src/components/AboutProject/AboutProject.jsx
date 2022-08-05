import React from 'react'
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="project-info">
      <h2 className="project-info__header">О проекте</h2>
      <ul className="project-info__list">
        <li className="project-info__list-item">
          <h3 className="project-info__list-title">Дипломный проект включал 5 этапов</h3>
          <p className="project-info__list-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project-info__list-item">
          <h3 className="project-info__list-title">На выполнение диплома ушло 5 недель</h3>
          <p className="project-info__list-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,&nbsp;чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="project-timetable">
        <li className="project-timetable__backend">
          <h3 className="project-timetable__title project-timetable__title_color_green">1 неделя</h3>
          <p className="project-timetable__description">Back-end</p>
        </li>
        <li className="project-timetable__frontend">
          <h3 className="project-timetable__title project-timetable__title_color_grey">4 недели</h3>
          <p className="project-timetable__description">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject
