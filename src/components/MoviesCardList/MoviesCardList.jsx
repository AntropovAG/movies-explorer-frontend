import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieCard from '../MoviesCard/MovieCard'
import './MoviesCardList.css'

function MoviesCardList({ movies, onLikeClick, onDeleteClick, extramovies }) {
  const location = useLocation();

  return (
    <section className={`card-list ${(location.pathname === '/saved-movies') && 'card-list_no-button'}`}>
      <ul className="card-list__container">
    { location.pathname === '/movies' &&
      movies.map((movie) => (
        <MovieCard {...movie}
              key={movie.id}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              />
    ))
    }
    { location.pathname === '/saved-movies' &&
      extramovies.map((movie) => (
        <MovieCard {...movie}
              key={movie.id}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}/>
    ))
    }
      </ul>
      {location.pathname === '/movies' && <button className="card-list__button" type='button'>Ещё</button>}
    </section>
  )
}

export default MoviesCardList
