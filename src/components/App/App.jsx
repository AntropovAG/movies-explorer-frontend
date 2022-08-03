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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({name: 'Виктор', email: 'pochta@yandex.ru'});
  const [isErrorPopUpOpen, setIsErrorPopUpOpen] = useState(false);

  function handleUserUpdate (name, email) {
    setCurrentUser(name, email);
  }

  function handleErrorPopUpOpen () {
    setIsErrorPopUpOpen(true);
  }

  function handleErrorPopUpClose () {
    setIsErrorPopUpOpen(false);
  }

  return (
    <div className='app'>
      {(location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && <Header/>}

      <Switch>
        <CurrentUserContext.Provider value={currentUser}>
          <ErrorPopUp isOpen={isErrorPopUpOpen}/>

          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/movies">
            <Movies/>
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

          {(location.pathname === "/" ||
            location.pathname === "/movies" ||
            location.pathname === "/saved-movies") &&
            <Footer/>
          }

        </CurrentUserContext.Provider>

        <Route path="*">
          <NotFound/>
        </Route>


      </Switch>


    </div>
  );
}

export default App;
