const axios = require("axios");
const BASE_API = "https://rickandmortyapi.com/api";

/**
 * Get one or more characters by id
 */
const getCharacterById = async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await axios.get(`${BASE_API}/character/${id}`);
    return res.json({
      ok: true,
      data,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      err,
    });
  }
};

/**
 * Get characters paginated
 */
const getCharacters = async (req, res) => {
  const page = Number(req.query.page) || 1;
  try {
    const { data } = await axios.get(`${BASE_API}/character/?page=${page}`);

    return res.json({
      ok: true,
      data,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      err,
    });
  }
};

/**
 * Get character details
 */
const getCharacterDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const { data } = await axios.get(`${BASE_API}/character/${id}`);
    const [location, origin, firstEpisode] = await Promise.all([
      axios.get(data.location.url),
      axios.get(data.origin.url),
      axios.get(data.episode[0]),
    ]);

    return res.json({
      ok: true,
      data: {
        ...data,
        location: {
          id: location.data.id,
          name: location.data.name,
          type: location.data.type,
        },
        origin: {
          id: origin.data.id,
          name: origin.data.name,
          type: origin.data.type,
        },
        firstEpisode: {
          name: firstEpisode.data.name,
          airDate: firstEpisode.data.air_date,
        },
      },
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      err,
    });
  }
};

module.exports = {
  getCharacterById,
  getCharacters,
  getCharacterDetails,
};
