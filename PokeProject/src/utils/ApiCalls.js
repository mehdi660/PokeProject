import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemon = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
};
