let choices = ["Rock", "Paper", "Scissors"];
const display = document.querySelector('div');
const playerDisplay = document.querySelector('#PlayerDisplay');
const computerDisplay = document.querySelector("#ComputerDisplay")
const results = document.querySelector('#Results');
const scoreDisplay = document.querySelector("#Score");
const gamesPlayedDisplay = document.querySelector("#GamesPlayed");
let score = 0;
let gamesPlayed = 0;


let computerPlay = () => choices[Math.floor(Math.random()*3)];
function play(playerChoice, computerChoice) {
    /*
    let computerChoice = computerPlay();
    let playerChoice = choice;
    while(playerChoice==null || playerChoice==undefined || choices.indexOf(playerChoice) == -1){
        playerChoice = prompt("Rock, Paper, Scissors\nWhat do you choose?");
        if(playerChoice!=null && playerChoice!=undefined && playerChoice!='')
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1,).toLowerCase();
    }
    */
    gamesPlayed++;

    switch(computerChoice) {
        case choices[0]:
            if(choices[0] == playerChoice) outcome(0);
            else choices[1] == playerChoice ? outcome(1) : outcome(-1);
            break;
        case choices[1]:
            if(choices[1] == playerChoice) outcome(0);
            else choices[2] == playerChoice ? outcome(1) : outcome(-1);
            break;
        case choices[2]:
            if(choices[2] == playerChoice) outcome(0);
            else choices[0] == playerChoice ? outcome(1) : outcome(-1);
            break;
    }
}

function game() {
    for(let i=0; i<5; i++)
        play();
}

function outcome(num) {
    let result = "";
    if(num==0) {
        result = "Draw! Aw shucks. No won wins this time. Maybe next time you'll have a better chance";
    }
    else if(num==1) {
        score++;
        result = "You win!! You beat the computer (which only happens 33% of the time)!";
    }
    else if(num==-1) {
        result = "You lose!! Maybe next time luck will be in your favor.";
        score--;
    }
    results.textContent="";
    displayNextLetter(result, results);
}

const buttons = document.querySelectorAll('button');

function displayThenPlay(dataChoice, node) {
    results.textContent = "";
    node.textContent = "";
    playerDisplay.style = "";
    computerDisplay.style = "";
    displayPicture(dataChoice, node);
    let computerChoice = computerPlay();
    computerDisplay.textContent = "";
    setTimeout(displayPicture, 500, computerChoice, computerDisplay);
    setTimeout(play, 1000, dataChoice, computerChoice);
    setTimeout(updateScores, 1001);
}

function updateScores() {
    scoreDisplay.textContent = "Score: " + score;
    gamesPlayedDisplay.textContent = "Games Played: " + gamesPlayed;
}

function displayPicture(pictureName, node) {
    node.style = "content: url(assets/" + pictureName + ".jpg)";
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayThenPlay(button.getAttribute('data-choice'), playerDisplay);
    })
})

function displayNextLetter(message, node) {
    node.textContent+=message[0];
    if(message.length > 1) setTimeout(displayNextLetter, 20, message.substring(1,), node);
}

//displayNextLetter("Hello, my name is Nate. What's yours?")
function center() {
    let leftWidth = (window.innerWidth-500)/2;
    document.querySelector('#PlayArea').style.marginLeft = leftWidth;
}

window.addEventListener('resize', center);
center();