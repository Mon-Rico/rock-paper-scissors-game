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
		return console.log(randChoice = 'Rock');
	}
	else if(randNum == 1){
		return console.log(randChoice = 'Paper');
	}
	else if(randNum == 2){
		return console.log(randChoice = 'Scissor');
	}
	else{
		console.log("Random Number was not chosen correctly");
	}
}
getComputerChoice();

//Create a function that returns one of the valid choices: 'Rock' 'Paper' or 'Scissor' after prompting the user.
function getHumanchoice(){
	let humanChoice = '';
	return console.log(humanChoice = prompt("Enter a choice of 'Rock', 'Paper' or 'Scissor'?"));

}
getHumanchoice();

//Create a function that takes two parameters, the computerChoice and humanChoice as arguments.
