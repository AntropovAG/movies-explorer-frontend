import React from 'react'
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'

function Movies({ isLoading, onSearch }) {
  return (
    <section className="movies">
      <SearchForm onSearch={onSearch}/>
      {isLoading ? <Preloader/> : <MoviesCardList/>}

    </section>
  )
}

export default Movies
