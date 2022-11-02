const pokemonAreaHTML = document.querySelector('.pokemons');

const createPokeLi = (pokemon) => {
  return `<li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.id}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
    </ol>

    <img src="${pokemon.photo}" alt=${pokemon.name}>
  </div>
</li>`;
};

apiData.getPokemonList(0, 6).then((pokemons = []) => {
  const newHtml = pokemons.map(createPokeLi).join('');
  pokemonAreaHTML.innerHTML = '';
  pokemonAreaHTML.innerHTML += newHtml;
});