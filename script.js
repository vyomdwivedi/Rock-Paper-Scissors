var comp_input = ""
var user_input = ""
function getComputerChoice() {
    var random_val = Math.random()

    if (random_val < 0.31) {
        comp_input = "rock"
    } 
    else if (random_val < 0.61 ) {
        comp_input = "scissors"
    } 
    else {
        comp_input = "paper"
    }
    return comp_input
}
console.log(getComputerChoice())

function playerChoice(choice) {
    user_input = choice
    comp_input = getComputerChoice()
    console.log("Player chose: "+user_input)
    console.log("Computer chose: "+comp_input)
    console.log(playRound(user_input, comp_input))
}

function playRound(user_input,comp_input) {
    if (user_input == comp_input) {
        return "it's a draw!"
    }
    else if ((user_input.toLowerCase() == 'rock' && comp_input == 'scissors')) {
        return "You win! Rock beats scissors."
    } 
    else if ((user_input.toLowerCase() == 'rock' && comp_input == 'paper')) {
        return "You lose! Paper beats rock."
    } 
    else if ((user_input.toLowerCase() == 'paper' && comp_input == 'rock')) {
        return "You win! Paper beats rock."
    } 
    else if ((user_input.toLowerCase() == 'paper' && comp_input == 'scissors')) {
        return "You lose! Scissors beats paper."
    } 
    else if ((user_input.toLowerCase() == 'scissors' && comp_input == 'paper')) {
        return "You win! Scissors beats paper."
    } 
    else if ((user_input.toLowerCase() == 'scissors' && comp_input == 'rock')) {
        return "You lose! Rock beats scissors."
    }
}
console.log(playRound(user_input, getComputerChoice()))

// function game() {
//     let scorePlayer = 0
//     let scoreComputer = 0
//     for (let i =0; i<5 ; i++){
//         const user_input = playerChoice();
//         const comp_input = getComputerChoice();
//         console.log(comp_input)
//         console.log(playRound(user_input,comp_input));
//         console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
//         if((playRound(user_input,comp_input) === "You win! Rock beats scissors."||"You win! Paper beats rock."||"You win! Scissors beats paper.")){
//             scorePlayer++
//         }
//         else if((playRound(user_input,comp_input) === "You lose! Rock beats scissors."||"You lose! Paper beats rock."||"You lose! Scissors beats paper.")){
//             scoreComputer++
//         }
//     }
//     console.log("Game Over")
//     if(scorePlayer > scoreComputer){
//         console.log("Congrats you win!!")
//     } else if (scorePlayer < scoreComputer){
//         console.log("Better luck next time.")
//     } else {
//         console.log("it's a tie!")
//     }
// }

// game()