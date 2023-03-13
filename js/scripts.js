// PokemonList wrapped inside of an IIFE:

let pokemonRepository = (function(){

    let pokemonList = [
        {name: "Charmeleon", weight: 19, type: ["fire","rock"]},
        {name: "Ponyta", weight: 30, type: ["ice","steel"]},
        {name: "Squirtle", weight: 9, type: ["water","grass"]},
        {name: "Alakazam", weight: 48, type: ["ghost","dragon"]}
    ];

    function getAll () {
        return pokemonList;
    }

    function add (pokemon) {
        if(
            typeof pokemon === 'object' &
            typeof pokemon.name === 'string' &
            typeof pokemon.height === 'number' &
            Array.isArray(pokemon.types)
        ) {
            pokemonList.push(pokemon)
        } else {
            console.log('Not valid!')
        }
    }

    function addListItem(pokemon) {
        let pokeList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button-list');
        listPokemon.appendChild(button);
        pokeList.appendChild(listPokemon);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        })
    }

    function showDetails(pokemon) {
        console.log(`Weight: ${pokemon.weight} Type: ${pokemon.type}`);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    }
  })()

// forEach loop

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
