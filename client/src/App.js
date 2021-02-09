import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRoute from "./components/Auth/Auth";
import Header from "./sections/Header/Header";
import LoginContainer from "./sections/Login/LoginContainer";
import HomeContainer from "./sections/Home/HomeContainer";
import FavoritesContainer from "./sections/Favorites/FavoritesContainer";
import CharacterDetailContainer from "./sections/CharacterDetail/CharacterDetailContainer";
import NotFound from "./sections/NotFound/NotFound";

const App = () => {
  const { isAuthUser } = useSelector((store) => store.user);

  return (
    <Router>
      {isAuthUser && <Header />}
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <AuthRoute
          exact
          isAuthUser={isAuthUser}
          path="/"
          component={HomeContainer}
        />
        <AuthRoute
          exact
          path="/favorites"
          isAuthUser={isAuthUser}
          component={FavoritesContainer}
        />
        <AuthRoute
          exact
          path="/character/:id/details"
          isAuthUser={isAuthUser}
          component={CharacterDetailContainer}
        />
        <AuthRoute isAuthUser={isAuthUser} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
