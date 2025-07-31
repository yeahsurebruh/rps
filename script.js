const choices = ['Rock', 'Paper', 'Scissors'];

const beats = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper'
};

const humanScore = document.querySelector("#human .scoreCount");
const computerScore = document.querySelector("#computer .scoreCount");

humanScore.textContent = 0;
computerScore.textContent = 0;

const roundCounter = document.querySelector(".roundCount");

function roundCountInc (text){
    let words = text.split(" ");
    words[1] = (Number(words[1])+1).toString();
    const new_text = words.join(" ");
    return new_text;
}

const battleText = document.querySelector(".battlefield");

const buttons = document.querySelectorAll(".choices > button");

function getComputerChoice(){
    return choices[Math.floor(Math.random()*(choices.length))];
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if(humanChoice === computerChoice){
        battleText.textContent = `Draw, both of you played ${humanChoice}`;
    }
    else if(beats[humanChoice] === computerChoice){
        battleText.textContent = `You win, you played ${humanChoice} and computer played ${computerChoice}`;
        humanScore.textContent = Number(humanScore.textContent) + 1;
    }
    else{
        battleText.textContent = `You lose, computer played ${computerChoice} and you played ${humanChoice}`;
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    roundCounter.textContent = roundCountInc(roundCounter.textContent);
}

buttons.forEach(item => {
    item.addEventListener("click", ()=>{
        const humanChoice = item.textContent;
        playRound(humanChoice);
    })
});