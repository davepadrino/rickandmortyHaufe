const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload.characters,
      };
    case "SET_FAVORITE_CHARACTERS":
      return {
        ...state,
        favorite: action.payload.favorite,
      };
    case "SET_CURRENT_CHARACTERS":
      return {
        ...state,
        selected: action.payload.selected,
      };
    default:
      return state;
  }
};

export default charactersReducer;
