export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_FAVORITE_CHARACTERS = "SET_FAVORITE_CHARACTERS";
export const SET_CURRENT_CHARACTERS = "SET_CURRENT_CHARACTERS";

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

export const setFavoriteCharacters = (characters) => ({
  type: SET_FAVORITE_CHARACTERS,
  payload: characters,
});

export const setCurrentCharacter = (character) => ({
  type: SET_CURRENT_CHARACTERS,
  payload: character,
});
