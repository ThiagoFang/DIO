const pokemonAreaHTML = document.querySelector('.pokemons');

const createPokeLi = (pokemon) => {
  return `<li class="pokemon">
  <span class="number">#${pokemon.id}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      <li class="type">type</li>
      <li class="type">type</li>
    </ol>

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt=${pokemon.name}>
  </div>
</li>`;
};

apiData.getPokemonList().then((pokemons = []) => {
  const newHtml = pokemons.map(createPokeLi).join('');
  pokemonAreaHTML.innerHTML = '';
  pokemonAreaHTML.innerHTML += newHtml;
});