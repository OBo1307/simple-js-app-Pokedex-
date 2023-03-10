let pokemonList = [
    {name: "Charmeleon", weight: 19, type: ["fire","rock"]},
    {name: "Ponyta", weight: 30, type: ["ice","steel"]},
    {name: "Squirtle", weight: 9, type: ["water","grass"]},
    {name: "Alakazam", weight: 48, type: ["ghost","dragon"]}
];

// for loop

/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].weight >= 40) {
        document.write(
            `${pokemonList[i].name} (Weight: ${pokemonList[i].weight}) (Type: ${pokemonList[i].type}) - Wow, that's big!<br>`
          );
    } else {
        document.write(
            `${pokemonList[i].name} (Weight: ${pokemonList[i].weight}) (Type: ${pokemonList[i].type})<br>`
          );
    }
  } */

// forEach loop

pokemonList.forEach(function(pokemon) {
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
