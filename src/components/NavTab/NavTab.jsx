import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__container">
        <a className="navtab__button" href="#AboutProject">
          О проекте
        </a>
        <a className="navtab__button" href="#Techs">
          Технологии
        </a>
        <a className="navtab__button" href="#AboutMe">
          Студент
        </a>
      </nav>
    </section>
  );
}

export default NavTab;
