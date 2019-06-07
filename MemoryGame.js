function randomizeCards() {
    let pokemon = ["Squirtle", "Squirtle", "Scyther", "Scyther", "Growlithe", "Growlithe", "Mewtwo", "Mewtwo", "Onix", "Onix", "Bulbasaur", "Bulbasaur"];
    for (i = 1; i <= 12; i++) {
        let pokemonCard = document.getElementById(`${i}`);
        const pokemonArrayNum = Math.floor(Math.random() * (pokemon.length))
        const pokemonForThisCard = pokemon.splice(pokemonArrayNum, 1);
        pokemonCard.className += " " + pokemonForThisCard;
        console.log(pokemonCard.className);
    }
}

randomizeCards();
