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
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
  })()

// forEach loop

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.weight >= 40) {
        document.write(
            `${pokemon.name} (Weight: ${pokemon.weight}) (Type: ${pokemon.type}) - Wow, that's big!<br>`
          );
    } else {
        document.write(
            `${pokemon.name} (Weight: ${pokemon.weight}) (Type: ${pokemon.type})<br>`
          );
    }  
});
