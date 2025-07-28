const choices = ["Rock", "Paper", "Scissors"];
const num_choices = 3;

function getComputerChoice (arr, len){
    return arr[Math.floor(Math.random() * len)];
}

console.log(getComputerChoice(choices, num_choices));