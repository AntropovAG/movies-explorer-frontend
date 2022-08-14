import React, { useState } from 'react';
import './MovieCard.css';
import { useLocation } from 'react-router-dom';

function MovieCard({ id,
                     movieId,
                     country,
                     director,
                     duration,
                     year,
                     description,
                     image,
                     trailerLink,
                     nameRU,
                     nameEN,
                     thumbnail,
                     onLikeClick,
                     onDeleteClick,

                    }) {
  const[isLiked, setIsLiked] = useState(false);
  const location = useLocation();
  const cardLikeButtonClassName = (`movie-card__like-button ${isLiked && 'movie-card__like-button_active'}`);
  const cardImage = `https://api.nomoreparties.co/${image.url}`;
  function toHoursAndMinutes(overalMinutes) {
    const hours = Math.floor(overalMinutes / 60);
    const minutes = overalMinutes % 60;
    return `${(hours === 0) ? '' : hours + ' ч'} ${minutes}м`;
  }
  const movieLength = toHoursAndMinutes(duration);


  function handleCardClick () {
    if (isLiked === false){
      onLikeClick({movieId: id,
        country,
        director,
        duration,
        year,
        description,
        image: cardImage,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,});
        setIsLiked(true)} else {
          onDeleteClick(id)
          setIsLiked(false)}
  }

  function handleDeleteClick () {
    onDeleteClick(movieId)
  }

  return (
    <article className="movie-card">
      <div className="movie-card__subscription">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">{nameRU}</h2>
          <p className="movie-card__duration">{movieLength}</p>
        </div>
        {location.pathname === '/movies' ?
          <button className={cardLikeButtonClassName} type="button" onClick={handleCardClick}></button>
        :
          <button className="movie-card__delete-button" type="button" onClick={handleDeleteClick}></button>}

      </div>
      <a className='movie-card__link' href={trailerLink}><img src={image.url ? cardImage : image} className="movie-card__image" alt='Картинка фильма'/></a>
    </article>
  )
}

export default MovieCard
