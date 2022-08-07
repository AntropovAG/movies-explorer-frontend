import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  const history = useHistory();

  return (
    <div className="wrong-page">
      <div className="wrong-page__container">
        <h2 className="wrong-page__title">404</h2>
        <p className="wrong-page__subtitle">Страница не найдена</p>
      </div>
      <Link className="wrong-page__link" onClick={() => history.goBack()}>Назад</Link>
    </div>
  )
};

export default NotFound
