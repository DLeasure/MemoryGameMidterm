
function randomizeCards() {
    let pokemon = ["Squirtle", "Squirtle", "Scyther", "Scyther", "Growlithe", "Growlithe", "Mewtwo", "Mewtwo", "Onix", "Onix", "Bulbasaur", "Bulbasaur"];
    for (i = 1; i <= 12; i++) {
        let pokemonCard = document.getElementById(`${i}`);
        const pokemonArrayNum = Math.floor(Math.random() * (pokemon.length))
        const pokemonForThisCard = pokemon.splice(pokemonArrayNum, 1);
        switch(pokemonForThisCard) {
            case "squirtle":
                pokemonCard.style.background ="url('squirtle.png')";
                break;
            case "scyther":
                pokemonCard.style.background ="url('scyther.png');";
                break;
            case "growlithe":
                pokemonCard.style.background ="url('growlithe.png)";
                break;
            case "mewtwo":
                pokemonCard.style.background ="url('mewtwo.png')";
                break;
            case "onix":
                pokemonCard.style.background ="url('onix.png')";
               break;
            case "bulbasaur":
                pokemonCard.style.background ="url('bulbasaur.png)";
                break;
        }

        // pokemonCard.className += " " + pokemonForThisCard;
        // console.log(pokemonCard.className);
    }
}

randomizeCards();



