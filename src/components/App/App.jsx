import { Route, Switch } from "react-router-dom"
import './App.css';
import '../Header/Header'
import '../Main/Main'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
// import ProtectedRoute from "../ProtectedRiute/ProtectedRoute";

function App() {


  return (
    <div className='app'>
      <Header/>

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
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
