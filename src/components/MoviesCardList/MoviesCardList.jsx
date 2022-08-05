import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieCard from '../MoviesCard/MovieCard'
import './MoviesCardList.css'

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className={`card-list ${(location.pathname === '/saved-movies') && 'card-list_no-button'}`}>
      <ul className="card-list__container">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </ul>
      {location.pathname === '/movies' && <button className="card-list__button" type='button'>Ещё</button>}
    </section>
  )
}

export default MoviesCardList
