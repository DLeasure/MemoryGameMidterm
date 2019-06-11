function changeText(box, text) {
    box.innerText = text;
}

const balloon = document.getElementsByClassName("balloon");

function pop(balloon) {
    balloon.style.backgroundColor = "red";
}



pop(balloon);