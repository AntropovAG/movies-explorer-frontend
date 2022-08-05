import React from 'react'
import './NavTab.css'

function NavTab() {
  return (
    <section className="navtab">
      <nav className='navtab__container'>
        <button className="navtab__button">О проекте</button>
        <button className="navtab__button">Технологии</button>
        <button className="navtab__button">Студент</button>
      </nav>

    </section>
  )
}

export default NavTab
