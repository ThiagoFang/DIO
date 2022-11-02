const pokemonAreaHTML = document.querySelector('.pokemons');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;

const createPokeLi = (pokemon) => {
  return `<li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.id}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>

    <img src="${pokemon.photo}" alt=${pokemon.name}>
  </div>
</li>`;
};

const loadPokemonItems = (offset, limit) => {
  apiData.getPokemonList(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(createPokeLi).join('');
    pokemonAreaHTML.innerHTML += newHtml;
  });
};

loadPokemonItems(offset, limit)
 
loadMoreButton.addEventListener('click', () => {
  offset += limit;
  loadPokemonItems(offset, limit);
});