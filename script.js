let moves = ["rock", "paper", "scissors"];
let computerMove = "";
let playerMove = "";

function computer() {
    let moveIndex = Math.floor(Math.random() * moves.length);
    document.querySelector(".computerMove").textContent = moves[moveIndex];
    computerMove = moves[moveIndex];
    checkResult(); 
}

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", computer);
});

document.querySelector(".rock").addEventListener("click", function() {
    playerMove = "rock";
    document.querySelector(".playerMove").textContent = "rock";
    console.log(`${playerMove} , ${computerMove}`);
    checkResult(); 
});

document.querySelector(".paper").addEventListener("click", function() {
    playerMove = "paper";
    document.querySelector(".playerMove").textContent = "paper";
    console.log(`${playerMove} , ${computerMove}`);
    checkResult(); 
});

document.querySelector(".scissors").addEventListener("click", function() {
    playerMove = "scissors";
    document.querySelector(".playerMove").textContent = "scissors";
    console.log(`${playerMove} , ${computerMove}`);
    checkResult(); 
});

function checkResult() {
    if (playerMove === computerMove) {
        document.querySelector(".result").textContent = "Draw";
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) {
        document.querySelector(".result").textContent = "You won!";
    } else {
        document.querySelector(".result").textContent = "You lost!";
    }
}
