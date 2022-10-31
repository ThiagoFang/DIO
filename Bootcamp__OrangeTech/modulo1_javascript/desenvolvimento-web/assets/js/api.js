const baseURL = 'https://pokeapi.co/api/v2/';

const apiData = {
  getPokemonDetail: async (pokemon) => {
    return fetch(pokemon.url)
      .then(response => response.json())
  },
  getPokemonList: async (offset = 0, limit = 3) => {
    const url = `${baseURL}pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
      .then(response => response.json())
      .then(jsonBody => jsonBody.results)
      .then(pokemons => pokemons.map(apiData.getPokemonDetail))
      .then(detailRequests => Promise.all(detailRequests))
      .then(pokemonsDetails => pokemonsDetails)
  },
};