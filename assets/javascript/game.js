

//variables for the whole game
var wins = 0;
var losses = 0;
var animalsIndex = 0;
var animals = ["horse", "dog", "cat", "elephant", "lion", "tiger", "zebra", "monkey", "duck", "cow"];


// variables for each round. they are reset each round
// a game round is when displaying a new word
var guessesLeft = 10;
var guessedLetters = [];
var currentAnimal = "";
var blanks = "";


// resetGame is a function called to reset the entire game
var resetGame = function(){

	wins = 0;
	losses = 0;
	animalsIndex = 0;
	currentAnimal = "";
	resetRound();
}

// restRound is a function called to reset the game round
var resetRound = function(){

	guessesLeft = 10;
	guessedLetters = [];
	blanks = "";

	currentAnimal = animals[animalsIndex];
	//animalsIndex++;
	
	for(var i=0; i < currentAnimal.length; i++){

		blanks+= "-";
	}
	console.log(blanks);
	document.getElementById("word").innerHTML = blanks;
	
}

resetRound();

// replaceLetter function is a function used to replace a letter at a given
//index in a given string by another given letter.

var replaceLetter = function(str, index, ltr){
	

	return str.substr(0, index) + ltr + str.substr(index+1);
	
}

// updateGessedLetters is a function to udate and display the
//wrongly guessed letters
var updateGuessedLetters = function(ltr, arr, match){

	var found = false;
	arr.forEach(function(element){

			if (ltr === element){
				found = true;
			}
	});

	if(!found && !match){

			arr.push(ltr);
			guessesLeft--;
	}

	console.log(arr);
	document.getElementById("letters-guessed").innerHTML = arr;
}

// checkCompletion is a function that checks if the current round is complete either
// when the guesses left reach 0 or when the user guess the word correctly 

var	checkCompletion = function(str1, str2, num){

	if(str1 === str2){
		wins++;
		document.getElementById("selected-image").src = "assets/images/animal"+animalsIndex+".jpg";
		return true;
	}

	else if(num === 0){
		losses++;
		return true;
	}
}


//main function called with every key stroke

document.onkeypress = function(event){

	if(event.charCode >= 97 && event.charCode <=122 ){

		var userGuess = event.key;


		var match = false;


		for(var i = 0; i<currentAnimal.length; i++ ){


			if( userGuess === currentAnimal.charAt(i)){
			
				blanks = replaceLetter(blanks, i, userGuess);
				match = true;
			
			}
		
	
		}


		updateGuessedLetters(userGuess, guessedLetters, match);



		console.log(blanks);
		document.getElementById("word").innerHTML = blanks;


		var complete = checkCompletion (blanks, currentAnimal, guessesLeft);

		if (complete) {
			animalsIndex++;
			console.log("we are done");
			console.log("Wins: " + wins);
			document.getElementById("wins").innerHTML = wins;

			console.log("Losses: "+ losses);
			document.getElementById("losses").innerHTML = losses;

			if (animalsIndex < animals.length){	
				console.log("It's a new round");
				resetRound();
			}	
			else{
				console.log("It's a new game");
				resetGame();
			}

		}

		document.getElementById("remaining-guesses").innerHTML = guessesLeft; 
	}


	else{

		console.log("Please enter a valid letter");
	}	
	//console.log(guessedLetters);
}

