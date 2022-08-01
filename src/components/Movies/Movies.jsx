import React from 'react'
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'

function Movies() {
  return (
    <section className="movies">
      <SearchForm/>
      <MoviesCardList/>
    </section>
  )
}

export default Movies
