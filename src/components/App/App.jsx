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
import { register, login, checkTokenValidity, logout, getUserInfo, updateUserInfo } from "../../utils/MainApi";
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
          setInfoMessage({text: err})
        })
  }

  function handleRegistration({name, email, password}) {
    register({name, email, password})
      .then(data => {
        handleLogin({email, password})
      })
        .catch(err => {
          setInfoMessage({text: err})
        })
  }

  function handleInfoPopUpClose () {
    setIsInfoPopUpOpen(false);
    setInfoMessage({message: 'Что-то пошло не так', color: 'red'})
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
        .catch(err => setInfoMessage({text: err, color: 'red'}))
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
      setInfoMessage({text: err})
    })
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

          {/* <Route exact path="/movies">
            <Movies isLoading={isLoading} onSearch={handleLoading}/>
          </Route> */}
        <ProtectedRoute
        exact path="/movies"
        component={Movies}
        loggedIn={isLoggedIn}
        isLoading={isLoading}
        onSearch={handleLoading}/>

        <ProtectedRoute
        exact path="/saved-movies"
        component={SavedMovies}
        loggedIn={isLoggedIn}
        isLoading={isLoading}
        onSearch={handleLoading}/>
{/*
          <Route exact path="/saved-movies">
            <SavedMovies/>
          </Route> */}

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
{/*
          <Route exact path="/profile">
            <Profile onUserUpdate={handleUserUpdate} onSignOut={handleUserSignOut}/>
          </Route> */}

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
