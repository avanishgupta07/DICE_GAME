
var randomNumber1 = Math.floor(Math.random() * 6);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "  &nbsp;&nbsp; Player 1 Win ! 🚩 ";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " &nbsp; &nbsp;  Player 2 Win ! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
function refreshPage() {
  location.reload(true); 
}

document.getElementById('refreshButton').addEventListener('click', refreshPage);