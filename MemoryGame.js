
function randomizeCards() {
    let pokemon = ["Squirtle", "Squirtle", "Scyther", "Scyther", "Growlithe", "Growlithe", "Mewtwo", "Mewtwo", "Onix", "Onix", "Bulbasaur", "Bulbasaur"];
    for (i = 1; i <= 12; i++) {
        let pokemonCard = document.getElementById(`${i}`);
        const pokemonArrayNum = Math.floor(Math.random() * (pokemon.length))
        const pokemonForThisCard = pokemon.splice(pokemonArrayNum, 1);
        switch(pokemonForThisCard[0]) {
            case "Squirtle":
                pokemonCard.style.background = "url('squirtle.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
            case "Scyther":
                pokemonCard.style.background = "url('scyther.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
            case "Growlithe":
                pokemonCard.style.background = "url('growlithe.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
            case "Mewtwo":
                pokemonCard.style.background = "url('mewtwo.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
            case "Onix":
                pokemonCard.style.background = "url('onix.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
            case "Bulbasaur":
                pokemonCard.style.background = "url('bulbasaur.png')";
                pokemonCard.style.backgroundSize = "150px 200px";
                break;
        }
    }
}

randomizeCards();



