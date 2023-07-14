

function playButton() {
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".img1").setAttribute("src","./images/dice"+ randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+ randomNumber2 + ".png");


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementsByClassName("number1")[0].innerHTML = randomNumber1;
    document.getElementsByClassName("number2")[0].innerHTML = randomNumber2;
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.getElementsByClassName("number1")[0].innerHTML = randomNumber1;
    document.getElementsByClassName("number2")[0].innerHTML = randomNumber2;
}

else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.getElementsByClassName("number1")[0].innerHTML = randomNumber1;
    document.getElementsByClassName("number2")[0].innerHTML = randomNumber2;
}

// to change color at each time when you press
const colors = ["red", "black", "yellow", "pink", "white"];

  const playerText = document.querySelectorAll(".player1");

  playerText.forEach((element, index) => {
    element.style.color = color[index % colors.length];
  });
}

// to change the names
var player1 = "player1";
var player2 = "player2";

function editNames(){
    player1 = prompt("change player1 name");
    player2 = prompt("change player2 name");

    document.querySelector("h3.player1").innerHTML = player1;
    document.querySelector("h3.player2").innerHTML = player2;
}




