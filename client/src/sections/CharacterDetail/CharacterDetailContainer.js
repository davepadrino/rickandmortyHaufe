import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCurrentCharacter } from "../../services/api";
import { setCurrentCharacter } from "../../redux/actions/characters";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CharacterDetail from "./CharacterDetail";

const Container = styled.div`
  padding: 32px;
`;

/**
 * Character details page container
 */
const CharacterDetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { selected } = useSelector((store) => store.characters);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchCharacter = async () => {
    try {
      const { data } = await getCurrentCharacter(id);
      dispatch(setCurrentCharacter({ selected: data.data }));
    } catch (err) {
      setError(err.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : error ? (
        <ErrorMessage error={error.statusText} />
      ) : (
        <CharacterDetail character={selected} />
      )}
    </Container>
  );
};

export default CharacterDetailContainer;
