import React from 'react'
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="project-info">
      <h2 className="project-info__header">О проекте</h2>
      <ul className="project-info__list">
        <li>
          <h3 className="project-info__list_title">Дипломный проект включал 5 этапов</h3>
          <p className="project-info__list_description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="project-info__list_title">На выполнение диплома ушло 5 недель</h3>
          <p className="project-info__list_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,&nbsp;чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="project-info__timetable">
      <li className="project-info__timetable_backend">
          <h3 className="project-info__timetable_backend_title">1 неделя</h3>
          <p className="project-info__timetable_backend_description">Back-end</p>
        </li>
        <li className="project-info__timetable_frontend">
          <h3 className="project-info__timetable_frontend_title">4 недели</h3>
          <p className="project-info__timetable_frontend_description">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject
