console.log("Hello World");
console.log("Hello Sunshine, The Earth Says Hello!");


//Two Global variables to keep track of scores.
var computerScore = 0;
var humanScore = 0;

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
	console.log("User choice: " + humanChoice.toLowerCase())
	console.log("Computer Choice: " + computerChoice.toLowerCase())
	//If both players tie, no points
	if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'rock') ||
		(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'paper') ||
		(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'scissor')){
		console.log("It's a tie, no point!")
	}

	//if computer wins, computer +1
	else if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper') ||
		(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissor') ||
		(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'rock')){
		computerScore += 1;
		console.log("You lose, Computer wins!");
	}

	//if human wins, human +1
	else if((humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissor') ||
		(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
		(humanChoice.toLowerCase() === 'scissor' && computerChoice.toLowerCase() === 'paper')){
		humanScore += 1;
		console.log("You win, Computer loss!");
	}
}


//Create a function that declares the winner of a 5-round match
function playGame(){

	//While the score variables are less than 5, play a round
	while(computerScore < 5 && humanScore < 5){
		//Get both user and computer choices
		let humanSelection = getHumanchoice();
		let computerSelection = getComputerChoice();

		//play a Round
		playRound(humanSelection,computerSelection);

	}
	
	//if the user wins
	if(humanScore === 5){
		console.log("The winner is the User! Congrats!");
		console.log("Final Scores: Computer: " + computerScore + " v User: " + humanScore);

	}
	if(computerScore === 5){
		console.log("The winner is the Computer! You lose!");
		console.log("Final Scores: Computer: " + computerScore + " v User: " + humanScore);

	}
}

playGame();