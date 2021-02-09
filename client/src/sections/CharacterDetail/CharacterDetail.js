import PropTypes from "prop-types";
import styled from "styled-components";
import { NOT_SET } from "../../constants";

const CharacterName = styled.h1`
  text-align: center;
`;

const PictureContainer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid rgb(39, 33, 51);
  margin-top: 20px;
  box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translate(-50%);
`;

const Picture = styled.img`
  max-width: 100%;
  display: block;
  border-radius: 50%;
`;

const InfoTitle = styled.p`
  font-weight: bold;
  display: inline;
`;

const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
`;

/**
 * Character info detailed
 */
const CharacterDetail = ({ character }) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    origin: { name: originName, type: originType },
    location: { name: locationName, type: locationType },
    image,
    firstEpisode: { name: episodeName, airDate },
  } = character;
  return (
    <div>
      <PictureContainer>
        <Picture src={image} alt={name} />
      </PictureContainer>
      <CharacterName>{name}</CharacterName>
      <GridInfo>
        <div>
          <InfoTitle>Status: </InfoTitle> {status || NOT_SET}
        </div>
        <div>
          <InfoTitle>Species: </InfoTitle>
          {species || NOT_SET}
        </div>
        <div>
          <InfoTitle>Type: </InfoTitle>
          {type || NOT_SET}
        </div>
        <div>
          <InfoTitle>Gender: </InfoTitle>
          {gender || NOT_SET}
        </div>
        <div>
          <InfoTitle>Origin: </InfoTitle>
          {`${originType} - ${originName}`}
        </div>
        <div>
          <InfoTitle>Location: </InfoTitle>
          {`${locationType} - ${locationName}`}
        </div>
        <div>
          <InfoTitle>First seen in: </InfoTitle>
          {`${episodeName} (${airDate})`}
        </div>
      </GridInfo>
    </div>
  );
};

CharacterDetail.propTypes = {
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

export default CharacterDetail;
