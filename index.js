//Player name
// For some reason my button isn't working to change the name of the second player.
document.getElementById('name-butn').addEventListener("click", function() {
    var player1 = prompt("Enter name for Player 1");
    var player2 = prompt("Enter name for Player 2");
    document.getElementById("player1").innerHTML = player1;
    document.getElementbyId("player2").innerHTML = player2;
});


// Roll the dice button
document.getElementById('roll-butn').addEventListener("click", function(){
    var dice1 = Math.floor(Math.random() * 6) +1;
    var dice2 = Math.floor(Math.random() * 6) +1;
    document.getElementById("img1").src = "dice" + dice1 + ".png";
    document.getElementById("img2").src = "dice" + dice2 + ".png";
    console.log(function())
    // if(dice1 > dice2){
    //     alert("Player 1 wins!");
    // } else if (dice1 < dice2) {
    //     alert("Player 2 wins!");
    // } else {
    //     alert("It's a tie!")
    // }
});