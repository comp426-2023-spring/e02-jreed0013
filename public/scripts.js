// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showButton(button) {
    document.getElementById(button).style.display = "block";
}
function hideButton(button) {
  document.getElementById(button).style.display = "none";
}
function getRadioValue(name) {
    var radio = document.querySelector(`input[name=${name}]:checked`);
    return radio.value;
}
function playGameButton() {
    var gameSelector = getRadioValue("gameSelector");
    if (gameSelector === "rpsChosen") {
        var opponentChoice = getRadioValue("rpsOpponentChoice")
        if (opponentChoice === "yes") {
            // CONTENT FOR RPS VS OPPONENT
            const value = getRadioValue("rpsChoice");
            const result = rps(value);
            document.getElementById("resultText").innerHTML = `Player chose ${result.player}, Opponent chose ${result.opponent}, Result is ${result.result}.`;
        } else {
            // CONTENT FOR RPS WITH RANDOM DRAW
            const rpsChoices = ["rock", "paper", "scissors"]
            const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
            const result = rps(computerChoice);
            document.getElementById("resultText").innerHTML = `Player chose ${result.player}, Opponent chose ${result.opponent}, Result is ${result.result}.`;
        }
    } else {
        var opponentChoice = getRadioValue("rpslsOpponentChoice")
        if (opponentChoice === "yes") {
            // CONTENT FOR RPSLS VS OPPONENT
            const value = getRadioValue("rpslsChoice");
            const result = rpsls(value);
            document.getElementById("resultText").innerHTML = `Player chose ${result.player}, Opponent chose ${result.opponent}, Result is ${result.result}.`;
        
        } else {
            // CONTENT FOR RPSLS WITH RANDOM DRAW
            const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]
            const computerChoice = rpslsChoices[Math.floor(Math.random() * rpslsChoices.length)];
            const result = rpsls(computerChoice);
            document.getElementById("resultText").innerHTML = `Player chose ${result.player}, Opponent chose ${result.opponent}, Result is ${result.result}.`;
        }
    }
}
function changeLabel(elementID, textReplacement) {
    document.getElementById(elementID).innerHTML = textReplacement;
}

function rps(choice) {
    const rpsChoices = ["rock", "paper", "scissors"]
    // generating computer choice
    const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

    // tie case
    if (choice == computerChoice) { 
        return { 
            "player": choice,
            "opponent": computerChoice,
            "result": "tie"
        };
    };

    // win and lose case
    if ((choice == "rock" && computerChoice == "scissors") ||
        (choice == "scissors" && computerChoice == "paper") ||
        (choice == "paper" && computerChoice == "rock")) {
        return {
            "player": choice,
            "opponent": computerChoice,
            "result": "win"
        };
    } else {
        return {
            "player": choice,
            "opponent": computerChoice,
            "result": "lose"
        };
    }
}

function rpsls(playerChoice) {    
    const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"]
    // generating computer choice
    const computerChoice = rpslsChoices[Math.floor(Math.random() * rpslsChoices.length)];

    // tie case
    if (playerChoice == computerChoice) {
        return { 
            "player": playerChoice,
            "opponent": computerChoice,
            "result": "tie"
        };
    };

    // win and lose case
    if ((playerChoice == "rock" && (computerChoice == "scissors" || computerChoice == "lizard")) ||
        (playerChoice == "scissors" && (computerChoice == "paper" || computerChoice == "lizard")) ||
        (playerChoice == "paper" && (computerChoice == "rock" || computerChoice == "spock")) ||
        (playerChoice == "lizard" && (computerChoice == "paper" || computerChoice == "spock")) ||
        (playerChoice == "spock" && (computerChoice == "rock" || computerChoice == "scissors"))) {
        return {
            "player": playerChoice,
            "opponent": computerChoice,
            "result": "win"
        };
    } else {
        return {
            "player": playerChoice,
            "opponent": computerChoice,
            "result": "lose"
        };
    }
}

function rulesRPS() {
    return(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}


function rulesRPSLS() {
    return(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

function resetPage() {
    window.location.reload();
}