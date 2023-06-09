const pokemonList = document.querySelector('.pokemonList')
const searchInputs = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

function gettingDetails(pokemonDetails,pokemonurl){
  console.log("Getting details for:", pokemonurl);
    fetch(pokemonurl)
        .then(res => res.json())
        .then(data => {
            const pokemonAbilities = data.abilities
            const pokemonMove = data.moves.slice(0, 3)
  //console.log(pokemonMoves)
  //console.log(pokemonAbilities)

  //create a list to store abilities
            const listAbilities = document.createElement('ul')
            pokemonAbilities.forEach(ability => {
            const abilityByPokemon = document.createElement('li')
            abilityByPokemon.textContent = `Abilities: ${ability.ability.name}`
  //console.log(abilityByPokemon)

            listAbilities.appendChild(abilityByPokemon)
  //console.log(listAbilities)
  })

  const moveList = document.createElement('ul')
  pokemonMove.forEach(pokemonMoves=>{
  //console.log(pokemonMoves)
  const moveByPokemon = document.createElement('li')
  moveByPokemon.textContent = `Movements: ${pokemonMoves.move.name}`
  //console.log(moveByPokemon)
  moveList.appendChild(moveByPokemon)
  //console.log(moveList)
  })

  pokemonDetails.appendChild(listAbilities)
  pokemonDetails.appendChild(moveList)

  })
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInputs.value.toLowerCase();
  const pokemonCards = document.querySelectorAll('.Pokemon');
  if (searchTerm.trim() !== ''){
  pokemonCards.forEach(pokemonCard => {
  const pokemonName = pokemonCard.querySelector('h2').textContent.toLowerCase();
  if (pokemonName.includes(searchTerm)){
  pokemonCard.style.display = 'block';
  }else {
  pokemonCard.style.display = 'none';
  }
  });
  }else {
  pokemonCards.forEach(pokemonCard => {
  pokemonCard.style.display = 'block';
  });
  
  }
  
  searchInputs.value = '';
  
  });

const fetchData = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => data.results.forEach((pokemon,index) => {
      
        const listOfPokemon = document.createElement('li');
        listOfPokemon.classList.add('Pokemon');

      const pokemonName = document.createElement('h2');
      pokemonName.textContent = pokemon.name;

      const imgPokemon = document.createElement('img');
      const pokemonId = index + 1;
      imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

      //gettingAbilities(listOfPokemon,pokemon.url)
      const pokemonButton = document.createElement('button');

pokemonButton.textContent = 'Pokemon Info';

pokemonButton.addEventListener('click', () => {
  let pokemonDetails = listOfPokemon.querySelector('.Pokemon-details');
  if (pokemonDetails) {
    pokemonDetails.remove(); // Remove the details element if it already exists
    pokemonButton.textContent = 'Pokemon Info';
  } else {
    pokemonDetails = document.createElement('div');
    pokemonDetails.classList.add('Pokemon-details');
    gettingDetails(pokemonDetails, pokemon.url);
    listOfPokemon.appendChild(pokemonDetails);
    pokemonButton.textContent = 'Hide Info';
  }
});

      listOfPokemon.appendChild(pokemonName);
      listOfPokemon.appendChild(imgPokemon);
      listOfPokemon.appendChild(pokemonButton);
      pokemonList.appendChild(listOfPokemon);
}))

};

fetchData()