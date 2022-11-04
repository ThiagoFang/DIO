const pokemonAreaHTML = document.querySelector('.pokemons');
const pokemonInfoArea = document.querySelector('.pokemon__info');
const loadMoreButton = document.getElementById('loadMoreButton');
const closeModalArrow = document.querySelector('.back__arrow');
const limit = 5;
let offset = 0;

const getPokemon = (id) => {
  console.log(pokemonInfoArea.classList)
  pokemonInfoArea.classList.add('active');
}

const createPokeLi = (pokemon) => {
  return `<li onclick="getPokemon(${pokemon.id})" data-key="${pokemon.id}" class="pokemon ${pokemon.type}">
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

const closeModal = () => {
  pokemonInfoArea.classList.remove('active');
};

closeModalArrow.addEventListener('click', closeModal);
 
loadMoreButton.addEventListener('click', () => {
  offset += limit;
  loadPokemonItems(offset, limit);
});