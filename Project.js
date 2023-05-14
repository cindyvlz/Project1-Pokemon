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