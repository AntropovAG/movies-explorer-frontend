import { React, useEffect, useState } from 'react'
import './SearchForm.css'
import icon from '../../images/search-form-icon.png'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({ onSearch,
                      setIsLoading,
                      onMessageSet,
                      onMessageReset,
                      onPopUpOpen,
                      setSearchResult,
                      isChecked,
                      setIsChecked,
                      setShortMovies }) {
  const [searchValue, setSearchValue] = useState("");


  function handleSearchChange (evt) {
    setSearchValue(evt.target.value)
  }

  function handleMoviesFilter(movies) {
    const keyword = searchValue.toLocaleLowerCase();
    const searchResult = movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword));
    const shortMovies = searchResult.filter((movie) => movie.duration < 40)
    setShortMovies(shortMovies)
    setSearchResult(searchResult)
    localStorage.setItem('userSearchState', JSON.stringify(searchResult));
    localStorage.setItem('userShortMovies', JSON.stringify(shortMovies))
  }

  function handleMoviesSearch(evt) {
    evt.preventDefault();
    const keyword = searchValue.toLocaleLowerCase();
    localStorage.setItem('userSearchValue', JSON.stringify(searchValue))
    if (keyword === "") {
      onMessageSet({text: 'Нужно ввести ключевое слово', color: 'white'});
      onPopUpOpen(true)
    } else {
      setIsLoading(true);
      onSearch()
      .then((allMovies) => {
        handleMoviesFilter(allMovies)
      })
      .then((res) => console.log(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
    }

    useEffect(() => {
      if (localStorage.getItem('userSearchValue')) {
        const searchValue = JSON.parse(localStorage.getItem('userSearchValue'));
        setSearchValue(searchValue);
      }
    }, [])

  return (
    <section className="search-form">
      <form className="search-form__container">
        <div className="search-form__search-group">
          <img className="search-form__icon" src={icon} alt="Иконка поиска фильма"/>
          <input className="search-form__input" placeholder='Фильм' value={searchValue || ""} onChange={handleSearchChange} required/>
          <button className="search-form__button" type='submit' onClick={handleMoviesSearch}></button>
        </div>
        <FilterCheckbox onChange={setIsChecked} isChecked={isChecked} />
      </form>
    </section>
  )
}

export default SearchForm
