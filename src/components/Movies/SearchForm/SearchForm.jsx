import React from 'react'
import './SearchForm.css'
import icon from '../../../images/search-form-icon.png'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <img className="search-form__icon" src={icon} alt="Иконка поиска фильма"/>
        <input className="search-form__input" placeholder='Фильм'/>
        <button className="search-form__button" type='button'></button>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm
