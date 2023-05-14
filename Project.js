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
    