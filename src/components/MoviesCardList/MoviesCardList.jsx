import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MovieCard from '../MoviesCard/MovieCard'
import './MoviesCardList.css'

function MoviesCardList({ movies, onLikeClick, onDeleteClick, savedMovies, numberToDisplay }) {
  const location = useLocation();
  const [displayedMovies, setDisplayedMovies] = useState([]);

  useEffect(() => {
    if(location.pathname === '/movies' && movies.length) {
      const moviesToShow = movies.slice(0, numberToDisplay.initial)
      setDisplayedMovies(moviesToShow)
    } else {
      setDisplayedMovies([])
    }
  }, [location.pathname, numberToDisplay, movies])

  function handleDisplayMore(evt) {
    evt.preventDefault();
    const start = displayedMovies.length;
    const end = start + numberToDisplay.additional;
    const remaining = movies.length - start;
    if (remaining > 0) {
      const moviesToShow = movies.slice(start, end)
      setDisplayedMovies([...displayedMovies, ...moviesToShow])}
  }

  return (
    <section className={`card-list ${(location.pathname === '/saved-movies') && 'card-list_no-button'}`}>
      <ul className="card-list__container">
    { location.pathname === '/movies' &&
      displayedMovies.map((movie) => (
        <MovieCard {...movie}
              key={movie.id}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              savedMovies={savedMovies}
              />
    ))
    }
    { location.pathname === '/saved-movies' &&
      savedMovies.map((movie) => (
        <MovieCard {...movie}
              key={movie.id}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}/>
    ))
    }
      </ul>
      {(location.pathname === '/movies' && displayedMovies.length < movies.length) && <button className="card-list__button" type='button' onClick={handleDisplayMore}>Ещё</button>}
    </section>
  )
}

export default MoviesCardList
