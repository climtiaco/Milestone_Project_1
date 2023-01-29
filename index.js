const rollButn = getElementById('roll-butn');

function randomizeDice() {
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
}

const nameChange = document.getElementById('name-butn')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

function changeNames() {
    const newName1 = prompt("Enter name for Player 1");
    const newName2 = prompt("Enter name for Player 2");
    player1.innerText = newName1;
    player2.innerText = newName2;
}

rollButn.addEventListener("click", randomizeDice);
nameChange.addEventListener("click", changeNames());