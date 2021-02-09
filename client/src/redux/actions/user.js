export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
  payload: null,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
