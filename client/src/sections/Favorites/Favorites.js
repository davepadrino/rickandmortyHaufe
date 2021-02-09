import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../../components/Card/Card";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

/**
 * Favorite characters page
 */
const Favorites = ({ characters }) => (
  <>
    <h1>Favorites</h1>
    <Container>
      {characters ? (
        characters.map(
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
            />
          )
        )
      ) : (
        <h2>Not favorites for you!</h2>
      )}
    </Container>
  </>
);

Favorites.propTypes = {
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
};

export default Favorites;
