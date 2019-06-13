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

// randomizeCards();

function startCountdown(seconds) {
    let counter = seconds;

    var interval = setInterval(() => {

        counter--;
        document.getElementById('timer').innerHTML = "0:" + seconds--;

        if (counter >= 10) {
            document.getElementById("timer").innerHTML = "0:" + counter;
        }

        if (counter <= 9 && counter > 0) {
            document.getElementById("timer").innerHTML = "0:0" + counter;
        };
        if (counter === 0) {

            clearInterval(interval);
            document.getElementById("timer").innerHTML = "GAME OVER!";

        };
    }, 1000);
};


// document.getElementById("timer").addEventListener("onclick", startCountdown(29));

if (document.getElementById("timer") === "GAME OVER!") {
    alert("Sorry, you lost!");
};

/*

FUNCTION FROM ADDRESS BOOK LAB THAT WILL GRAB WINNER 
function display() {

    let x = document.createElement("ul");

    x.setAttribute("class", "contact-list");

    let t = document.createElement("li");

    let t1 = document.createTextNode("Name: " + document.getElementById('name').value);

    t.appendChild(t1);

   



    x.appendChild(t);};}
    */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
window.onload = function modalLoad() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    startCountdown(30);
    startGame();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal() {
    $(document).ready(function() {
        $("#myModal").modal();
    });
}

function closeModal() {
    $(document).ready(function() {
        $("#myModal").modal('hide');
    });
}