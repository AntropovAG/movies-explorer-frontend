import { Route, Switch, useLocation } from "react-router-dom"
import { useState } from "react";
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
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({name: 'Виктор', email: 'pochta@yandex.ru'});
  const [isErrorPopUpOpen, setIsErrorPopUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

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

  // function handleErrorPopUpOpen () {
  //   setIsErrorPopUpOpen(true);
  // }

  // function handleErrorPopUpClose () {
  //   setIsErrorPopUpOpen(false);
  // }

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
            <Register/>
          </Route>

          <Route exact path="/signin">
            <Login/>
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
      <ErrorPopUp isOpen={isErrorPopUpOpen}/>

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
