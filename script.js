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


let userChoice = askUserChoice();
log(userChoice);
log(typeof userChoice);
//console.log(isValidInput(userChoice));