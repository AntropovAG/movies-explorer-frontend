import React, { useEffect, useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies({
  isLoading,
  setIsLoading,
  onSearch,
  onMessageSet,
  onMessageReset,
  onPopUpOpen,
  onLikeClick,
  onDeleteClick,
  savedMovies,
  initialMovies,
  onMount,
  numberToDisplay,
  handleDisplaySize
}) {
  const [searchResult, setSearchResult] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    onMount();
    handleDisplaySize();
    console.log('проверка')
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userSearchState")) {
      const searchResult = JSON.parse(localStorage.getItem("userSearchState"));
      setSearchResult(searchResult);
    }
    if (localStorage.getItem("userShortMovies")) {
      const shortMovies = JSON.parse(localStorage.getItem("userShortMovies"));
      setShortMovies(shortMovies);
    }
    if (localStorage.getItem("userCheckedState")) {
      const checkState = JSON.parse(localStorage.getItem("userCheckedState"));
      setIsChecked(checkState);
    }
  }, []);

  return (
    <section className="movies">
      <SearchForm
        onSearch={onSearch}
        setIsLoading={setIsLoading}
        onMessageSet={onMessageSet}
        onMessageReset={onMessageReset}
        onPopUpOpen={onPopUpOpen}
        initialMovies={initialMovies}
        setShortMovies={setShortMovies}
        setSearchResult={setSearchResult}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={isChecked ? shortMovies : searchResult}
          savedMovies={savedMovies}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
          numberToDisplay={numberToDisplay}
        />
      )}
    </section>
  );
}

export default Movies;
