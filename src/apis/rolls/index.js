import axios from "axios";
import env from "../../env.js";

const getAll = async (page) => {
  return await axios.get(`${env.apiURI}/rolls/getAll?page=${page}`);
};

const create = async (character, biome, badges, quantityRolls) => {
  return await axios.post(`${env.apiURI}/rolls/create`, {
    character,
    biome,
    badges,
    quantityRolls,
  });
};

export default {
  getAll,
  create,
};
