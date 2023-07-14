

function playButton() {
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".img1").setAttribute("src","./images/dice"+ randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+ randomNumber2 + ".png");


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
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

