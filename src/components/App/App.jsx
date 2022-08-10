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
import {register, login, checkTokenValidity} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState({message: 'Что-то пошло не так', color: 'red'});
  const [isInfoPopUpOpen, setIsInfoPopUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleUserUpdate (name, email) {
    setCurrentUser(name, email);
  }

  function handleLoading () {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000)
  }

  function handleNavigationOpen () {
    setIsNavigationOpen(true);
  }

  function handleNavigationClose () {
    setIsNavigationOpen(false);
  }

  function handleRegistration({name, email, password}) {
    register({name, email, password})
      .then(data => {
        setIsRegistered(true);
        setInfoMessage({text: 'Вы успешно зарегистрированы! Пожалуйста войдите в ваш аккаунт!', color: 'white'})
        setIsInfoPopUpOpen(true);
        history.push("/signin")
      })
        .catch(err => {
          setIsRegistered(false);
          setInfoMessage({text: err, color: 'red'})
          setIsInfoPopUpOpen(true);
        })
  }

  function handleInfoPopUpClose () {
    setIsInfoPopUpOpen(false);
    setInfoMessage({message: 'Что-то пошло не так', color: 'red'})
  }

  function handleLogin({email, password}) {
    login({email, password})
      .then(data => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", data.token);
        history.push("/movies");
        })
        .catch(err => {
          setIsRegistered(false);
          setInfoMessage({text: err.status, color: 'red'})
          setIsInfoPopUpOpen(true);
          console.log(err)
        })
  }

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      checkTokenValidity(jwt)
        .then((res) => {
        if (res) {
          // setCurrentUser({ name: res.name, email: res.email });
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
        .catch(err =>console.log(err))
    }
  }

  useEffect(()=>{
    checkToken();
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      {(location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && <Header onClick={handleNavigationOpen}/>}

      <Switch>

          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/movies">
            <Movies isLoading={isLoading} onSearch={handleLoading}/>
          </Route>
        {/* <ProtectedRoute exact path="/movies">

        </ProtectedRoute> */}
          <Route exact path="/saved-movies">
            <SavedMovies/>
          </Route>

          <Route exact path="/signup">
            <Register onRegister={handleRegistration}/>
          </Route>

          <Route exact path="/signin">
            <Login onLogin={handleLogin}/>
          </Route>

          <Route exact path="/profile">
            <Profile onUserUpdate={handleUserUpdate}/>
          </Route>

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
