import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import './App.css';
import '../Header/Header'
import '../Main/Main'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import { register, login, checkTokenValidity, logout, getUserInfo, updateUserInfo, saveMovie, deleteMovie, getSavedMovies } from "../../utils/MainApi";
import { getMovies } from "../../utils/MovieApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState({text: '', color: 'red'});
  const [isInfoPopUpOpen, setIsInfoPopUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  function handleLoading () {
    setIsLoading(true);
  }

  function handleNavigationOpen () {
    setIsNavigationOpen(true);
  }

  function handleNavigationClose () {
    setIsNavigationOpen(false);
  }

  function resetErrorMessage() {
    setInfoMessage({message: ''})
  }

  function handleLogin({email, password}) {
    login({email, password})
      .then(data => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        history.push("/movies");
        })
        .catch(err => {
          setIsLoggedIn(false);
          if (typeof err === 'string') {
            setInfoMessage({text: err})
          } setInfoMessage({text: 'Непредвиденная ошибка'})
        })
  }

  function handleRegistration({name, email, password}) {
    register({name, email, password})
      .then(data => {
        handleLogin({email, password})
      })
      .catch(err => {
        setIsLoggedIn(false);
        if (typeof err === 'string') {
          setInfoMessage({text: err})
        } setInfoMessage({text: 'Непредвиденная ошибка'})
      })
}

  function handleInfoPopUpClose () {
    setIsInfoPopUpOpen(false);
    setInfoMessage({text: '', color: 'red'})
  }

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      checkTokenValidity(jwt)
        .then((res) => {
        if (res) {
          setCurrentUser({ _id: res._id, name: res.name, email: res.email });
          setIsLoggedIn(true);
        }
      })
        .catch(err => console.log(err))
    }
  }

  useEffect(()=>{
    checkToken();
  }, [])

  function handleUserSignOut() {
    logout()
    .then((res) => {
      localStorage.removeItem("jwt");
      setCurrentUser({})
      setIsLoggedIn(false);
      history.push("/");
    })
    .catch(err =>console.log(err))
  }

  function handleUserInfoUpdate({name, email}) {
    updateUserInfo({name, email})
    .then((res) => {
      setCurrentUser({ _id: res._id, name: res.name, email: res.email });
      setIsInfoPopUpOpen(true);
      setInfoMessage({text: 'Данные пользователя обновлены', color: 'white'})
      setIsDisabled(true);
    })
    .catch(err => {
      if (typeof err === 'string') {
        setInfoMessage({text: err})
      } setInfoMessage({text: 'Непредвиденная ошибка'})
    })
}

  function handleLikeClick({country,
                            director,
                            duration,
                            year,
                            description,
                            image,
                            trailerLink,
                            nameRU,
                            nameEN,
                            thumbnail,
                            movieId}) {
    saveMovie({country,
              director,
              duration,
              year,
              description,
              image,
              trailerLink,
              nameRU,
              nameEN,
              thumbnail,
              movieId})
    .then((movie) => {
      setSavedMovies([movie, ...savedMovies])
    })
    .catch(err => {
      if (typeof err === 'string') {
        setInfoMessage({text: err})
      } setInfoMessage({text: 'Непредвиденная ошибка'})
    })
  }

  function handleDeleteClick(id) {
    const currentMovie = savedMovies.find((movie) => movie.movieId === id);
    console.log(id)
    deleteMovie(currentMovie._id)
    .then((res) =>
    setSavedMovies(savedMovies.filter((movie) => movie.movieId !== id)))
    .catch(err => {
      if (typeof err === 'string') {
        setInfoMessage({text: err})
      } setInfoMessage({text: 'Непредвиденная ошибка'})
    })
  }


  function handleSavedMoviesSearch() {
    getSavedMovies()
    .then(res => setSavedMovies (res))
  }

  useEffect(() => {
    if (isLoggedIn) {
    getUserInfo()
      .then((res) => {
        setCurrentUser({ _id: res._id, name: res.name, email: res.email })
      })
        .catch(err => console.log(err))
      }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className='app'>
      {(location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && <Header onClick={handleNavigationOpen} isLoggedIn={isLoggedIn}/>}

      <Switch>

        <Route exact path="/">
          <Main/>
        </Route>

        <ProtectedRoute
        exact path="/movies"
        component={Movies}
        loggedIn={isLoggedIn}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSearch={getMovies}
        onMessageSet={setInfoMessage}
        onMessageReset={resetErrorMessage}
        onPopUpOpen={setIsInfoPopUpOpen}
        onLikeClick={handleLikeClick}
        onDeleteClick={handleDeleteClick}
        savedMovies={savedMovies}
        onMount={handleSavedMoviesSearch}
        />

        <ProtectedRoute
        exact path="/saved-movies"
        component={SavedMovies}
        loggedIn={isLoggedIn}
        isLoading={isLoading}
        onSearch={getMovies}
        savedMovies={savedMovies}
        onMount={handleSavedMoviesSearch}
        onDeleteClick={handleDeleteClick}/>

        <Route exact path="/signup">
          <Register onRegister={handleRegistration} message={infoMessage.text} onMessageReset={resetErrorMessage}/>
        </Route>

        <Route exact path="/signin">
          <Login onLogin={handleLogin} message={infoMessage.text} onMessageReset={resetErrorMessage}/>
        </Route>

        <ProtectedRoute
        exact path="/profile"
        component={Profile}
        loggedIn={isLoggedIn}
        onUserUpdate={handleUserInfoUpdate}
        onSignOut={handleUserSignOut}
        message={infoMessage.text}
        onMessageReset={resetErrorMessage}
        isDisabled={isDisabled}
        onDisableChange={setIsDisabled}/>

        <Route component={NotFound}/>

      </Switch>

      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies") && <Footer/>
      }

      <Navigation onClose={handleNavigationClose} isOpen={isNavigationOpen}/>
      <InfoPopUp isOpen={isInfoPopUpOpen} message={infoMessage} onClose={handleInfoPopUpClose}/>

    </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
