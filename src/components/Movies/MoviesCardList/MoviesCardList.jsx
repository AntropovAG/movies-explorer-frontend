import React from 'react'
import MovieCard from '../MoviesCard/MovieCard'
import './MoviesCardList.css'

function MoviesCardList() {
  return (
    <div className="card-list">
      <ul className='card-list__container'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      </ul>
      <button className="card-list__button" type='button'>Ещё</button>
    </div>
  )
}

export default MoviesCardList
