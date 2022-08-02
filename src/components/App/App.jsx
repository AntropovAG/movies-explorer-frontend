import { Route, Switch, useLocation } from "react-router-dom"
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
// import ProtectedRoute from "../ProtectedRiute/ProtectedRoute";

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      {(location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile") && <Header/>}

      <Switch>
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
          <Movies/>
        </Route>

      </Switch>

      {(location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies") &&
      <Footer/>}

    </div>
  );
}

export default App;
