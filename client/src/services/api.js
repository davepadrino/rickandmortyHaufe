import axios, { API_URL } from "./axiosConfig";

// User services
export const loginService = (user) => axios.post(`${API_URL}/login`, user);
export const getUser = (id) => axios.get(`${API_URL}/user/${id}`);
export const setUserFavorite = (user) =>
  axios.put(`${API_URL}/user/${user._id}`, user);

// Characters services
export const getCharacters = (page) =>
  axios.get(`${API_URL}/characters?page=${page}`);
export const getFavoriteCharacters = (favIds) =>
  axios.get(`${API_URL}/character/${favIds}`);
export const getCurrentCharacter = (id) =>
  axios.get(`${API_URL}/character/${id}/details`);
