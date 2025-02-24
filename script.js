// add event listener for the buttons, use div choices and e.target
// store the choice to userChoice
// display results (create html elements and appendChild the result)
//   display userChoice and computerChoice variables
//   display roundWinner variable
// display score
//   display userScore and computerScore variables
// display gameWinner
//   create a new variable gameWinner, and display it in html
//

console.log(document.querySelector("button").value);

console.log("Hello World");

let log = console.log;


/* asks the user choice and also checks if valid, will ask again if not*/
function askUserChoice(){
    let userChoice = prompt("Please input your choice(Rock,Paper,Scissors)");
    userChoice = userChoice.toUpperCase();
   //  log(userChoice);
   // log(typeof userChoice);
   // return isValidInput(userChoice) ? userChoice : askUserChoice();
    if (isValidInput(userChoice)) {
        return userChoice
    } else{
      alert("Invalid output. Try again")
      return askUserChoice();
    }
    

}

/*auxiliary function to check if input is valid */
function isValidInput(input){
    return input === "ROCK" || input === "PAPER" || input === "SCISSORS" ? true : false
}

// function to randomly determine computer choice
function determineComputerChoice(){
    let x = Math.floor(Math.random() * 3); // to randomize a number between 0 and 2
    switch(x){
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER"
            break;
        case 2:
            return "SCISSORS"
            break;
        default:
            console.log("default block");
        
    }
}

// game logic
function playRound(userChoice,computerChoice){
    log(userChoice);
    log(computerChoice);
 
    if(userChoice === computerChoice){
        log("Tie");
        return "Tie";
    } else if(userChoice === "ROCK" && computerChoice === "PAPER"){
        log("Computer Wins");
        return "Computer";
    } else if(userChoice === "ROCK" && computerChoice === "SCISSORS"){
        log("User Wins");
        return "User";
    } else if(userChoice === "PAPER" && computerChoice === "ROCK"){
        log("User Wins")
        return "User";
    } else if(userChoice === "PAPER" && computerChoice === "SCISSORS" ){
        log("Computer Wins");
        return "Computer"
    } else if(userChoice === "SCISSORS" && computerChoice === "ROCK"){
        log("Computer Wins");
        return "Computer"
    } else if (userChoice === "SCISSORS" && computerChoice === "PAPER"){
        log("User Wins")
        return "User"
    } else {
        log("That's weird");
        return "Weird"
    }
}


function playGame(){
    let userScore = 0;
    let computerScore = 0;
    let x = 1;
    while (x <= 5){
        log("Round:" + x);
        let userChoice = askUserChoice();
        let computerChoice = determineComputerChoice();
        let roundWinner = playRound(userChoice,computerChoice)
            if (roundWinner === "User"){
                userScore++;
                log("User score is:")
                log(userScore);
                log("Computer score is:")
                log(computerScore);
            } else if (roundWinner === "Computer"){
                computerScore++;
                log("User score is:")
                log(userScore);
                log("Computer score is:")
                log(computerScore);
            } else {

            }
        x++;
    } 

    if (userScore === computerScore){
        log("Tie")
    } else if (userScore > computerScore) {
        log("You won the game!")
    } else {
        log("You lost the game")
    }
}

// playGame();

// let userChoice = askUserChoice();
// let computerChoice = determineComputerChoice();

// playRound(userChoice,computerChoice);


// let userChoice = askUserChoice();
// log(userChoice);
// log(typeof userChoice);

// let computerChoice = determineComputerChoice();
// log(computerChoice);
// log(typeof computerChoice);
