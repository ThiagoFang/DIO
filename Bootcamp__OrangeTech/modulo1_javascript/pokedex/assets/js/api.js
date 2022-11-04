const baseURL = 'https://pokeapi.co/api/v2/';

const convertPokeApiDetailToPokemon = (pokeDetail) => {
  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.id = pokeDetail.order;

  const types = pokeDetail.types.map(typeSlot => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

const apiData = {
  getPokemonDetail: async (pokemon) => {
    return fetch(pokemon.url)
      .then(response => response.json())
      .then(convertPokeApiDetailToPokemon)
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