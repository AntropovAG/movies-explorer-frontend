import { React, useEffect, useState } from 'react'
import './SearchForm.css'
import icon from '../../images/search-form-icon.png'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch,
                      setIsLoading,
                      savedMovies,
                      onMessageSet,
                      onPopUpOpen,
                      setSearchResult,
                      setSavedMovies,
                      isChecked,
                      setIsChecked,
                      setShortMovies,
                      initialMovies}) {

  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange (evt) {
    setSearchValue(evt.target.value)
  }

  function handleMoviesFilter(movies) {
    const keyword = searchValue.toLocaleLowerCase();
    const searchResult = movies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword));
    const shortMovies = searchResult.filter((movie) => movie.duration < 40);
    setShortMovies(shortMovies)
    setSearchResult(searchResult)
    localStorage.setItem('userSearchState', JSON.stringify(searchResult));
    localStorage.setItem('userShortMovies', JSON.stringify(shortMovies))
            if (searchResult.length === 0) {
          onMessageSet({text: 'К сожалению, ничего не найдено', color: 'white'});
          onPopUpOpen(true)}
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
      handleMoviesFilter(initialMovies)
      setIsLoading(false)

      }
    }

  function handleSavedMoviesSearch(evt) {
    evt.preventDefault();
    const keyword = searchValue.toLocaleLowerCase();
    if (keyword === "") {
      onMessageSet({text: 'Нужно ввести ключевое слово', color: 'white'});
      onPopUpOpen(true)
    } else {
        setIsLoading(true);
        const keyword = searchValue.toLocaleLowerCase();
        const searchResult = savedMovies.filter((movie) => movie.nameRU.toLowerCase().includes(keyword));
        const shortMovies = searchResult.filter((movie) => movie.duration < 40)
        setShortMovies(shortMovies)
        setSavedMovies(searchResult)
        setIsLoading(false)
        if (searchResult.length === 0) {
          onMessageSet({text: 'К сожалению, ничего не найдено', color: 'white'});
          onPopUpOpen(true)
        }
      }
  }

    useEffect(() => {
      onSearch()
    }, [])

    useEffect(() => {
      if (localStorage.getItem('userSearchValue') && location.pathname ==='/movies') {
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
          <button className="search-form__button" type='submit' onClick={location.pathname === '/movies' ? handleMoviesSearch : handleSavedMoviesSearch}></button>
        </div>
        <FilterCheckbox onChange={setIsChecked} isChecked={isChecked} />
      </form>
    </section>
  )
}

export default SearchForm
