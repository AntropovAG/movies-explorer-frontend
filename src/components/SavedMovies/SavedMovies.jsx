import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({
  onSearch,
  isLoading,
  setIsLoading,
  savedMovies,
  onMount,
  onDeleteClick,
  onMessageSet,
  onPopUpOpen,
  setSavedMovies,
  savedShortMovies,
  setSavedShortMovies,
}) {
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    onMount();
  }, []);

  return (
    <section className="saved-movies">
      <SearchForm
        onSearch={onSearch}
        savedMovies={savedMovies}
        setShortMovies={setSavedShortMovies}
        onMount={onMount}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setSavedMovies={setSavedMovies}
        onMessageSet={onMessageSet}
        onPopUpOpen={onPopUpOpen}
        setIsLoading={setIsLoading}
      />
      <MoviesCardList
        savedMovies={isChecked ? savedShortMovies : savedMovies}
        onDeleteClick={onDeleteClick}
      />
    </section>
  );
}

export default SavedMovies;
