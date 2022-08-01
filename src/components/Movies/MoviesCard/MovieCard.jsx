import React from 'react';
import './MovieCard.css';
import testPic from '../../../images/card-test-pic.png'

function MovieCard() {
  return (
    <article className="movie-card">
      <div className="movie-card__subscription">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">33 слова о дизайне</h2>
          <p className="movie-card__duration">1ч 47м</p>
        </div>
        <button className="movie-card__like-button"></button>
      </div>
      <img src={testPic} className="movie-card__image" alt='картинка'/>
    </article>
  )
}

export default MovieCard
