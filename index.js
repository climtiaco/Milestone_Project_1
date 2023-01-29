

document.getElementById('name-butn').addEventListener("click", function() {
    const player1 = document.getElementById('player1')
    const player2 = document.getElementById('player2')
        const newName1 = prompt("Enter name for Player 1");
        const newName2 = prompt("Enter name for Player 2");
        player1.innerText = newName1;
        player2.innerText = newName2;

});
// const score = document.querySelector();
// let player1Score = 0;
// let player2Score = 0;

document.getElementById('roll-butn').addEventListener("click", function(){
    var dice1 = Math.floor(Math.random() * 6) +1; //This is going to generate a random number from 1 to 6.. you put the +1 after so that it includes the 6th dice roll
    var dice2 = Math.floor(Math.random() * 6) +1;
    document.getElementById("img1").src = "/images/dice" + dice1 + ".png";
    document.getElementById("img2").src = "/images/dice" + dice2 + ".png";

    if(dice1 > dice2){
        alert("Player 1 wins!");
//        player1Score++;
    } else if (dice1 < dice2) {
        alert("Player 2 wins!");
//        player2score++;
    } else {
        alert("It's a tie!")
    }
});


