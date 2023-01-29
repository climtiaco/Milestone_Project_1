//Player name
// For some reason my button isn't working to change the name of the second player.
document.getElementById('name-butn').addEventListener("click", function() {
    var player1 = prompt("Enter name for Player 1");
    var player2 = prompt("Enter name for Player 2");
    document.getElementById("player1").innerHTML = player1;
    document.getElementbyId("player2").innerHTML = player2;
});


// Roll the dice button
// Math.floor rounds the number down to keep it a whole number
var score = 0;


document.getElementById('roll-butn').addEventListener("click", function(){
    var dice1 = Math.floor(Math.random() * 6) +1; //This is going to generate a random number from 1 to 6.. you put the +1 after so that it includes the 6th dice roll
    var dice2 = Math.floor(Math.random() * 6) +1;
    document.getElementById("img1").src = "/images/dice" + dice1 + ".png";
    document.getElementById("img2").src = "/images/dice" + dice2 + ".png";

    if(dice1 > dice2){
        alert("Player 1 wins!");
    } else if (dice1 < dice2) {
        alert("Player 2 wins!");
    } else {
        alert("It's a tie!")
    }
});