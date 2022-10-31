const pokemonAreaHTML = document.querySelector('.pokemons');

const createPokeLi = (pokemon) => {
  return `<li class="pokemon">
  <span class="number">number</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      <li class="type">type</li>
      <li class="type">type</li>
    </ol>

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=${pokemon.name}>
  </div>
</li>`;
};

const setPokemonList = async () => {
  const pokemonList = await apiData.getPokemonList();

  if(Array.isArray(pokemonList)) {
    const listItem = pokemonList.map(pokemon => createPokeLi(pokemon));
    const newHTML = listItem.join('');

    pokemonAreaHTML.innerHTML += newHTML;
  };
};
setPokemonList();
