import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Home = ({
  characters,
  onClickFavorite,
  paginationInfo,
  fetchCharacters,
}) => {
  return (
    <>
      <h1>Characters</h1>
      <Container>
        {characters?.map(
          ({
            id,
            name,
            location,
            gender,
            origin,
            type,
            image,
            status,
            species,
            isFavorite,
          }) => (
            <Card
              id={id}
              key={id}
              name={name}
              status={status}
              species={species}
              type={type}
              gender={gender}
              origin={origin.name}
              location={location.name}
              image={image}
              isFavorite={isFavorite}
              onClickFavorite={onClickFavorite}
            />
          )
        )}
        {paginationInfo?.count > 1 && (
          <Pagination
            paginationInfo={paginationInfo}
            onClick={fetchCharacters}
          />
        )}
      </Container>
    </>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      origin: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
      }),
      location: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
      }),
      image: PropTypes.string,
      firstEpisode: PropTypes.shape({
        name: PropTypes.string,
        airDate: PropTypes.string,
      }),
    })
  ),
  onClickFavorite: PropTypes.func,
  paginationInfo: PropTypes.shape({
    page: PropTypes.number,
    next: PropTypes.string,
    prev: PropTypes.string,
    pages: PropTypes.number,
    count: PropTypes.number,
  }),
  fetchCharacters: PropTypes.func,
};

export default Home;
