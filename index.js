console.log("Hello World");
console.log("Hello Sunshine, The Earth Says Hello!");

//Two Global variables to keep track of scores.
let computerScore = 0;
let humanScore = 0;

//Create new function named: getComputerChoice
//getComputerChoice will randomly return one of 3 choices: Rock, Paper or Scissors in string form
function getComputerChoice(){
	randChoice = '';  //will return based on randNumber 
	randNum = Math.floor(Math.random()*3);  
	//Based on the hint given, with getting a random integer by multiplying a given max integer 
	// and a float decimal between 0(inclusive) and 1(exclusive).
	// console.log(randNum); Flag to check random number between 1 and 3(exclusive)

	if(randNum == 0){
		return randChoice = 'rock';
	}
	else if(randNum == 1){
		return randChoice = 'paper';
	}
	else if(randNum == 2){
		return randChoice = 'scissor';
	}
	else{
		console.log("Random Number was not chosen correctly");
	}
}

//Create a function that returns one of the valid choices: 'Rock' 'Paper' or 'Scissor' after prompting the user.
function getHumanchoice(){
	let humanChoice = '';
	return humanChoice = prompt("Enter a choice of 'Rock', 'Paper' or 'Scissor'?");

}

//Create a function that takes two parameters, the computerChoice and humanChoice as arguments.
//Make function's humanChoice lower case-insensitive
//Increment the humanScore and computerScore vars based on round winner.
function playRound(humanChoice,computerChoice){
	console.log(humanChoice.toLowerCase())
	console.log(computerChoice.toLowerCase())
	//If both players tie, no points
	if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'rock') ||
	(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'paper') ||
	(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'scissor')){
		console.log("It's a tie, no point!")
	}

	//if computer wins, computer +1
	if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper') ||
	(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissor') ||
	(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'rock')){
		computerScore += 1;
		console.log("You lose, Computer wins!");
	}

	//if human wins, human +1
	if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissor') ||
	(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
	(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'paper')){
		humanScore += 1;
		console.log("You win, Computer loss!");
	}
}

let humanSelection = getHumanchoice();
let computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
