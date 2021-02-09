import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUser, getFavoriteCharacters } from "../../services/api";
import { setUser } from "../../redux/actions/user";
import { setFavoriteCharacters } from "../../redux/actions/characters";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Favorites from "./Favorites";

const Container = styled.div`
  padding: 32px;
`;

/**
 * Favorite characters page container
 */
const FavoritesContainer = () => {
  const dispatch = useDispatch();
  const {
    characters: { favorite },
    user: { user },
  } = useSelector((store) => store);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchFavoriteCharacters = async () => {
    if (user.favorite) {
      try {
        const { data } = await getFavoriteCharacters(user.favorite);
        setError();
        if (data.data instanceof Array) {
          dispatch(setFavoriteCharacters({ favorite: data.data }));
        } else {
          dispatch(setFavoriteCharacters({ favorite: [data.data] }));
        }
      } catch (err) {
        setError(err.response);
      }
    } else {
      dispatch(setFavoriteCharacters({ favorite: null }));
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { data } = await getUser(user._id);
        setError();
        dispatch(setUser(data.user));
      } catch (err) {
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    fetchFavoriteCharacters();
  }, [user]);

  return (
    <Container>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : error ? (
        <ErrorMessage error={error.statusText} />
      ) : (
        <Favorites characters={favorite} />
      )}
    </Container>
  );
};

export default FavoritesContainer;
