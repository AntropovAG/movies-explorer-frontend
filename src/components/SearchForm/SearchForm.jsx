import { React, useState } from 'react'
import './SearchForm.css'
import icon from '../../images/search-form-icon.png'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState();

  function handleSearchChange (evt) {
    setSearchValue(evt.target.value)
  }

  function handleSearchMovie (evt) {
    evt.preventDefault();
    onSearch();
    setSearchValue('');
  }

  return (
    <section className="search-form">
      <form className="search-form__container">
        <div className="search-form__search-group">
          <img className="search-form__icon" src={icon} alt="Иконка поиска фильма"/>
          <input className="search-form__input" placeholder='Фильм' value={searchValue || ""} onChange={handleSearchChange} />
          <button className="search-form__button" type='submit' onClick={handleSearchMovie}></button>
        </div>
        <FilterCheckbox/>
      </form>
    </section>
  )
}

export default SearchForm
