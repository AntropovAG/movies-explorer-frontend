import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css'

function SavedMovies({ onSearch, isLoading, savedMovies, onMount, onDeleteClick }) {


  useEffect(() => {
    onMount()
  }, [])

  return (
    <section className="saved-movies">
      <SearchForm/>
      <MoviesCardList extramovies={savedMovies} onDeleteClick={onDeleteClick}/>
    </section>
  )
};

export default SavedMovies
