let pokemonList = [
    {name: "Charmeleon", weight: 19, type: ["fire","rock"]},
    {name: "Ponyta", weight: 30, type: ["ice","steel"]},
    {name: "Squirtle", weight: 9, type: ["water","grass"]},
    {name: "Alakazam", weight: 48, type: ["ghost","dragon"]}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(
      pokemonList[i].name +
        " " +
        "(Weight:" +
        pokemonList[i].weight +
        ")" +
        " " +
        "(Type:" +
        pokemonList[i].type +
        ")" +
        "<br>"
    );
  }