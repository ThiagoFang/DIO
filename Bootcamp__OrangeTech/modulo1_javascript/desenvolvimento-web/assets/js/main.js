const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const apiData = {
  getPokemonList: async () => {
    try{
      const data = await fetch(url);
      const json = await data.json();
      return json
    } catch(error) {
      alert(error);
    };
  },
};

const pokemonLog = (pokemonList) => {
  pokemonList.map(item => console.log(item))
};

const setPokemonList = async () => {
  const pokemonList = await apiData.getPokemonList();
  pokemonLog(pokemonList.results)
}

const pokemonList = setPokemonList();