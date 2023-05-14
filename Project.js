const pokemonList = document.querySelector('.pokemonsList');
const searchInputs = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');

//getting details from the pokemon to add to our card
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