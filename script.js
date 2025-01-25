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

function playRound(userChoice,computerChoice){
    log(userChoice);
    log(computerChoice);
    if(userChoice === computerChoice){
        log("Tie");
    } else if(userChoice === "ROCK" && computerChoice === "PAPER"){
        log("Computer Wins");
    } else if(userChoice === "ROCK" && computerChoice === "SCISSORS"){
        log("User Wins");
    } else if(userChoice === "PAPER" && computerChoice === "ROCK"){
        log("User Wins")
    } else if(userChoice === "PAPER" && computerChoice === "SCISSORS" ){
        log("Computer Wins");
    } else if(userChoice === "SCISSORS" && computerChoice === "ROCK"){
        log("Computer Wins");
    } else if (userChoice === "SCISSORS" && computerChoice === "PAPER"){
        log("User Wins")
    } else {
        log("That's weird");
    }
}

let userChoice = askUserChoice();
let computerChoice = determineComputerChoice();

playRound(userChoice,computerChoice);


// let userChoice = askUserChoice();
// log(userChoice);
// log(typeof userChoice);

// let computerChoice = determineComputerChoice();
// log(computerChoice);
// log(typeof computerChoice);
