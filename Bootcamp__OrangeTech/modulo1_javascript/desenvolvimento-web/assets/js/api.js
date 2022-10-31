const baseURL = 'https://pokeapi.co/api/v2/';

const apiData = {
  getPokemonList: async (offset = 0, limit = 10) => {
    const url = `${baseURL}pokemon?offset=${offset}&limit=${limit}`;

    try {
      const data = await fetch(url);
      const json = await data.json();
      return json.results;
    } catch (error) {
      alert(error);
    }
  },
};