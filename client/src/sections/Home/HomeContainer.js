import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCharacters } from "../../redux/actions/characters";
import { setUser } from "../../redux/actions/user";
import { getUser, getCharacters, setUserFavorite } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Home from "./Home";

const Container = styled.div`
  padding: 32px;
`;

/**
 * Characters page container
 */
const HomeContainer = () => {
  const dispatch = useDispatch();
  const {
    characters,
    user: { user },
  } = useSelector((store) => store);
  const [paginationInfo, setPaginationInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const isFavorite = (characters) =>
    characters.map((character) => ({
      ...character,
      isFavorite: user.favorite.split(",").includes(`${character.id}`),
    }));

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

  const fetchCharacters = async (page = 1) => {
    try {
      const { data } = await getCharacters(page);
      const charactersWithFavorite = isFavorite(data?.data.results);
      setError();
      dispatch(setCharacters({ characters: charactersWithFavorite }));
      setPaginationInfo({
        page,
        next: data?.data.info.next,
        prev: data?.data.info.prev,
        pages: data?.data.info.pages,
        count: data?.data.info.count,
      });
    } catch (err) {
      setError(error);
    }
  };

  const onClickFavorite = async (id) => {
    try {
      let userFavoriteIds = [];
      let idIndex;
      if (!!user.favorite) {
        userFavoriteIds = user.favorite.split(",");
        idIndex = userFavoriteIds.indexOf(id);
        if (idIndex !== -1) {
          // id exists
          userFavoriteIds.splice(idIndex, 1);
        } else {
          // id doesn't exist
          userFavoriteIds.push(id);
        }
      } else {
        // id doesn't exist
        userFavoriteIds.push(id);
      }
      const updatedUser = { ...user, favorite: userFavoriteIds.join(",") };
      const { data } = await setUserFavorite(updatedUser);
      dispatch(setUser(data.user));
    } catch (err) {
      setError(err.response);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [user]);

  return (
    <Container>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : error ? (
        <ErrorMessage error={error.statusText} />
      ) : (
        <Home
          characters={characters?.characters}
          onClickFavorite={onClickFavorite}
          paginationInfo={paginationInfo}
          fetchCharacters={fetchCharacters}
        />
      )}
    </Container>
  );
};

export default HomeContainer;
