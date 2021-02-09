import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarFilled from "../Icons/StarFilled";
import StarEmpty from "../Icons/StarEmpty";
import { NOT_SET } from "../../constants";

const CardContainer = styled.div`
  display: flex;
  background: rgb(205, 225, 225);
  border-radius: 2px;
  padding: 12px;
  border: 1px solid rgb(90 99 99);
  width: 300px;
  margin-bottom: 24px;
`;

const PictureContainer = styled.div`
  height: 56px;
  width: 56px;
  display: inline-block;
  position: relative;
`;

const Picture = styled.img`
  max-width: 100%;
  display: block;
  position: absolute;
  border-radius: 50%;
  left: 0px;
  top: 0px;
  object-fit: cover;
  &::after {
    content: "";
    height: inherit;
    width: inherit;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

const CardInfo = styled.div`
  flex: 1 1 0%;
  padding-left: 16px;
  padding-top: 4px;
`;

const Badge = styled.span`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ status }) => validateBadgeColor(status.toLowerCase())};
  color: ${({ status }) => validateBadgeColor(status.toLowerCase())};
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  line-height: 0.8;
  padding: 4px 8px;
  text-transform: uppercase;
`;

const CharInfo = styled.div`
  font-size: 16px;
  line-height: 22px;
`;

const CharName = styled(CharInfo)`
  font-weight: bold;
`;

const FavoriteContainer = styled.div`
  float: right;
  cursor: pointer;
`;

const CharacterLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  margin-right: 12px;
`;

const validateBadgeColor = (status) => {
  if (status === "alive") {
    return "rgb(0, 144, 144)";
  } else if (status === "dead") {
    return "rgb(255, 0, 0)";
  }
  if (status === "unknown") return "rgb(0,0,0)";
};

/**
 * Character card component where we'll show info and can
 * add it as favorite to the current user
 */
const Card = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  isFavorite,
  onClickFavorite,
}) => (
  <CardContainer>
    <PictureContainer>
      <Picture src={image} alt={name} />
    </PictureContainer>
    <CardInfo>
      <CharName>
        <CharacterLink to={`/character/${id}/details`}>{name}</CharacterLink>
        <Badge status={status}>{status}</Badge>
        {onClickFavorite && (
          <FavoriteContainer
            data-testid="favorite"
            onClick={() => onClickFavorite(`${id}`)}
          >
            {isFavorite ? <StarFilled /> : <StarEmpty />}
          </FavoriteContainer>
        )}
      </CharName>
      <CharInfo data-testid="species">Specie: {species || NOT_SET}</CharInfo>
      <CharInfo data-testid="type">Type: {type || NOT_SET}</CharInfo>
      <CharInfo data-testid="gender">Gender: {gender || NOT_SET}</CharInfo>
      <CharInfo data-testid="origin">Origin: {origin || NOT_SET}</CharInfo>
      <CharInfo data-testid="location">
        Location: {location || NOT_SET}
      </CharInfo>
    </CardInfo>
  </CardContainer>
);

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
  onClickFavorite: PropTypes.func,
};

export default Card;
