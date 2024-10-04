userScore = 0;
compScore = 0;

choiceSelection = ["paper", "rock", "scissors"];

let userPaper = document.querySelector('#user-paper');
let userRock = document.querySelector('#user-rock');
let userScissors = document.querySelector('#user-scissors');

let choices = document.querySelectorAll('.choice-span');

let compChoiceSpan = document.querySelectorAll('.compChoice-span');

let what_wins_msgP = document.querySelector('#what-wins-msg-p');

let who_wins_msgP = document.querySelector(".who-wins-msg-p");

let userScoreDisplay = document.querySelector(".user-score-display");
let compScoreDisplay = document.querySelector(".comp-score-display");


// To check for user's choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        if (compChoiceArr[0] != null){
            remove_compChoice_effect(compChoiceArr[0]);
        }

        compChoiceArr.shift();
        userChoice = choice.getAttribute("id");
        console.log(userChoice);
        game();         // Start of game
    })
})



// To remove the visual effect in computer choice.
let remove_compChoice_effect = (compChoice) => {
    compChoice.classList.remove("compSelected");
}



// To generate computer's choice
let computer_choice = (choiceSelection) => {

    // random number from 0 to 2 to select from choiceSelection array
    randNum = Math.floor(Math.random()*3);      
    let compChoice = choiceSelection[randNum];
    return compChoice;
}


let userwin = false;
let compChoiceArr = [];     // To create array of computer choice so that it can be visually displayed.


let game = () => {

    let compChoice = computer_choice(choiceSelection);
    if (compChoice === 'paper') {

        // Class is added to visually display computer's choice
        compChoiceSpan[0].classList.add("compSelected");
        compChoiceArr.push(compChoiceSpan[0]);  // Added element to choice array

    } else if (compChoice === 'rock'){

        // Class is added to visually display computer's choice
        compChoiceSpan[1].classList.add("compSelected");
        compChoiceArr.push(compChoiceSpan[1]);  // Added element to choice array

    } else{

        // Class is added to visually display computer's choice
        compChoiceSpan[2].classList.add("compSelected");
        compChoiceArr.push(compChoiceSpan[2]);  // Added element to choice array
    }
    
    if (userChoice === compChoice){
        console.log("It was a draw");
        what_wins_msgP.innerText = `Both choose ${userChoice}`;
        what_wins_msgP.style.visibility = "visible";

        who_wins_msgP.innerText = "Draw"
        who_wins_msgP.style.backgroundColor = "gray";
        who_wins_msgP.style.visibility = "visible";


    } else{
        if (userChoice === 'paper') {
            userwin = compChoice === "rock" ? true : false;
            whoWins(userwin, userChoice, compChoice);
        }
        else if (userChoice === 'rock') {
            userwin = compChoice === "scissors" ? true : false;
            whoWins(userwin, userChoice, compChoice);

        }
        else{
            userwin = compChoice === "paper" ? true : false;
            console.log(userChoice);
            whoWins(userwin, userChoice, compChoice);

        }
    }
};



// Check either user or computer wins
let whoWins = (userwin, userChoice, compChoice) => {
    if (userwin === true) {

        userScore++;

        what_wins_msgP.innerText = `${userChoice} beats ${compChoice}`;
        what_wins_msgP.style.visibility = "visible";

        userScoreDisplay.innerText = userScore;

        who_wins_msgP.style.backgroundColor = "green";
        who_wins_msgP.innerText = "You Win!"
        who_wins_msgP.style.visibility = "visible";

    } else {
        compScore++;

        what_wins_msgP.innerText = `${compChoice} beats ${userChoice}`;
        what_wins_msgP.style.visibility = "visible";

        compScoreDisplay.innerText = compScore;

        who_wins_msgP.style.backgroundColor = "red";
        who_wins_msgP.innerText = "Computer Wins!"
        who_wins_msgP.style.visibility = "visible";
    }
}