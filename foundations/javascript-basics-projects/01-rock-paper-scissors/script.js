function getComputerChoice(rock, paper, scissors, min, max) {
    rock = "rock";
    paper = "paper";
    scissors = "scissors";
    min = 1;
    max = 3;

    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);

    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else if (computerChoice === 3) {
        return scissors;
    } else {
        return "Computer didn't make a choice";
    }
}