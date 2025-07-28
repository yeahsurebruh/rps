const choices = ["Rock", "Paper", "Scissors"];
const num_choices = 3;

let human_score = 0;
let computer_score = 0;

function getComputerChoice (arr, len){
    return arr[Math.floor(Math.random() * len)];
}

//console.log(getComputerChoice(choices, num_choices));

function getHumanChoice (){
    return prompt("Enter choice");
}

function winCheck(ch1, ch2){ // returns 1 if ch1 wins,  -1 if ch2 wins,  0 if draw
    if(ch1 == ch2)
        return 0;
    else if(ch1 == "Rock"){
        if(ch2 == "Paper"){
            return -1;
        }
        else{
            return 1;
        }
    }
    else if(ch1 == "Paper"){
        if(ch2 == "Scissors"){
            return -1;
        }
        else {
            return 1;
        }
    }
    else{
        if(ch1 == "Rock"){
            return -1;
        }
        else {
            return 1;
        }
    }
}

function playGame(){
    let human_choice, computer_choice, temp;
    while(human_score < 3 && computer_score < 3){
        human_choice = getHumanChoice();
        computer_choice = getComputerChoice(choices, num_choices);
        temp = winCheck(human_choice, computer_choice);
        if(temp == 0){
            alert(`Computer Played: ${computer_choice}\nYou played: ${human_choice}\nDraw!`);
        }
        else if(temp == 1){
            human_score++;
            alert(`Computer Played: ${computer_choice}\nYou played: ${human_choice}\nYou win!`);
        }
        else{
            computer_score++;
            alert(`Computer Played: ${computer_choice}\nYou played: ${human_choice}\nYou lose.`);
        }
        alert(`Computer Score: ${computer_score}\nYour Score: ${human_score}`);
    }
    if(human_score==3){
        alert("Yayy you won the BO5");
    }
    else{
        alert("Oopsie you lost the BO5");
    }
}
//console.log(getHumanChoice());
playGame();