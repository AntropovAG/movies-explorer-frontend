import React, { useState } from 'react';
import './MovieCard.css';
import testPic from '../../../images/card-test-pic.png'

function MovieCard() {
  const[isLiked, setIsLiked] = useState(false);
  const cardLikeButtonClassName = (`movie-card__like-button ${isLiked && 'movie-card__like-button_active'}`);

  function handleCardLike () {
    if (isLiked === false){
      setIsLiked(true)} else {
      setIsLiked(false)}
  }

  return (
    <article className="movie-card">
      <div className="movie-card__subscription">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">33 слова о дизайне</h2>
          <p className="movie-card__duration">1ч 47м</p>
        </div>
        <button className={cardLikeButtonClassName} type="button" onClick={handleCardLike}></button>
      </div>
      <img src={testPic} className="movie-card__image" alt='картинка'/>
    </article>
  )
}

export default MovieCard
