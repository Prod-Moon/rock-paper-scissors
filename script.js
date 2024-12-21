

const result = document.querySelector(".result");
const submitButton = document.querySelector("#submitButton");
const playerCount = document.querySelector(".playerCount");
const computerCount = document.querySelector(".computerCount");
let playerCounts = 0;
let computerCounts = 0;

/* console.log(cleanedUserInput) */

function randomNum() {
    return Math.floor(Math.random() * 3 ) + 1;
}
function computerResults() {
    let computerInput = randomNum();
    if (computerInput === 1) {
       return "rock"
    }
    else if (computerInput === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


/* if (userInput === "") {
    result.textContent = "You didn't enter a valid input (try entering rock, paper or scissors)"
} */
function generateResult() {
    const userInput = document.querySelector("#userInput").value;
    const cleanedUserInput = userInput.trim().toLowerCase();

    if (cleanedUserInput !== "rock" && cleanedUserInput !== "paper" && cleanedUserInput !== "scissors") {
        result.textContent = "You didn't enter a valid input (try entering rock, paper or scissors)"
        return;
    } 

    const computerInput = computerResults();
    if (computerInput === cleanedUserInput) {
        result.textContent = `You picked ${cleanedUserInput} and computer picked ${computerInput}. it's a tie games`
    }
    else if (
        (computerInput === "rock" && cleanedUserInput === "scissors") ||
        (computerInput === "scissors" && cleanedUserInput === "paper") ||
        (computerInput === "paper" && cleanedUserInput === "rock")
    ) {
        result.textContent = `You picked ${cleanedUserInput} and the computer picked ${computerInput}. Computer won! Try again.`;
        computerCounts++;
        computerCount.innerText = computerCounts;
    }
    else {
        result.textContent = `You picked ${cleanedUserInput} and computer picked ${computerInput}. You won!. Congratulations`
        playerCounts++;
        playerCount.innerText = playerCounts;
    }
}

submitButton.addEventListener("click", generateResult);




