import jwt from "jsonwebtoken";

const userReducer = (
  state = {
    isAuthUser: !!localStorage.getItem("tokenChallenge"),
    user: {
      _id: jwt.decode(localStorage.getItem("tokenChallenge"))?.user._id,
    },
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAuthUser: true,
      };
    case "LOGOUT":
      localStorage.removeItem("tokenChallenge");
      return {
        ...state,
        isAuthUser: false,
        user: {},
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
