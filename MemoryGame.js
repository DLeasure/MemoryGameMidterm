
function randomizeCards() {
    let pokemon = ["Squirtle", "Squirtle", "Scyther", "Scyther", "Growlithe", "Growlithe", "Mewtwo", "Mewtwo", "Onix", "Onix", "Bulbasaur", "Bulbasaur"];
    for (i = 1; i <= 12; i++) {
        let pokemonCard = document.getElementById(`${i}`);
        const pokemonArrayNum = Math.floor(Math.random() * (pokemon.length))
        const pokemonForThisCard = pokemon.splice(pokemonArrayNum, 1);
        switch(pokemonForThisCard) {
            case "squirtle":
                pokemonCard.style.backgroundImage(url('squirtle.png'));
                break;
            case "scyther":
                pokemonCard.style.backgroundImage(url('scyther.png'));
                break;
            case "growlithe":
                pokemonCard.style.backgroundImage(url('growlithe.png'));
                break;
            case "mewtwo":
                pokemonCard.style.backgroundImage(url('mewtwo.png'));
                break;
            case "onix":
                pokemonCard.style.backgroundImage(url('onix.png'));
                break;
            case "bulbasaur":
                pokemonCard.style.backgroundImage(url('bulbasaur.png'));
                break;
        }

        // pokemonCard.className += " " + pokemonForThisCard;
        // console.log(pokemonCard.className);
    }
}

randomizeCards();
