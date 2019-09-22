let choices = ["Rock", "Paper", "Scissors"];
let computerPlay = () => choices[Math.floor(Math.random()*3)];
function play() {
    let computerChoice = computerPlay();
    let playerChoice;
    while(playerChoice==null || choices.indexOf(playerChoice) == -1){
        playerChoice = prompt("Rock, Paper, Scissors\nWhat do you choose?").toLowerCase();
        if(playerChoice!=null && playerChoice!=undefined && playerChoice!='')
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1,);
    }

    console.log("You chose " + playerChoice + " and the computer chose " + computerChoice + ".");

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
    if(num==0)
        console.log("Draw");
    else if(num==1)
        console.log("Win!");
    else if(num==-1)
        console.log("You lose!!");
}

game();