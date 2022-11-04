const pokemonAreaHTML = document.querySelector('.pokemons');
const pokemonInfoArea = document.querySelector('.pokemon__info');
const loadMoreButton = document.getElementById('loadMoreButton');
const closeModalArrow = document.querySelector('.back__arrow');
const limit = 5;
let offset = 0;

const formatPokemonid = (id) => {
  if(id < 10) return `#00${id}`;
  if(id >= 10 && id < 100) return `#0${id}`;
  return `#${id}`;
}

const formatStatsLi = (stats) => {
  const html = stats.map(stat => {
    const maxStat = 200;
    const width = (stat.base * 100) / maxStat;

    return`
      <li class="pokemon__stats-item">
        <div class="pokemon__stats-itemTitle">${stat.name}</div>
        <div class="pokemon__stats-itemBase">${stat.base}</div>
        <div class="pokemon__stats-bar">
          <div class="pokemon__stats__barFill" style="width:${width}%;"></div>
        </div>
      </li>
    `;
  });
  return html;
};

const appendModalInfo = (pokemon) => {
  const pokemonInfo = document.querySelector('.pokemon__info');
  const nameArea = document.querySelector('.main__info-name');
  const idArea = document.querySelector('.pokemon__id');
  const types = document.querySelector('.main__info-types');
  const pokeImg = document.querySelector('.pokemon__data-img')
  const pokemonStats = document.querySelector('.pokemon__stats-area')

  pokemonInfo.className = '';
  pokemonInfo.classList.add('pokemon__info');
  pokemonInfo.classList.add(pokemon.type);

  nameArea.innerHTML = pokemon.name;
  idArea.innerHTML = formatPokemonid(pokemon.id);
  types.innerHTML = pokemon.types.map(type => `<li class="main__info-type">${type}</li>`).join('');
  pokeImg.src = pokemon.photo;
  pokemonStats.innerHTML = formatStatsLi(pokemon.stats).join('');
};

const getPokemon = async (id) => {
  const pokemon = await apiData.getOnePokemon(id);
  appendModalInfo(pokemon);
  pokemonInfoArea.classList.add('active');
}

const createPokeLi = (pokemon) => {
  return `<li onclick="getPokemon(${pokemon.id})" class="pokemon ${pokemon.type}">
  <span class="number">${formatPokemonid(pokemon.id)}</span>
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