import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  return (
    <div className="wrong-page">
      <div className="wrong-page__container">
        <h2 className="wrong-page__title">404</h2>
        <p className="wrong-page__subtitle">Страница не найдена</p>
      </div>
      <Link className="wrong-page__link" to='./'>Назад</Link>
    </div>
  )
};

export default NotFound
