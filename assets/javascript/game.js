

//variables for the whole game
var wins = 0;
var losses = 0;
var animalsIndex = 0;
//var animals = ["horse", "dog", "cat", "elephant", "lion", "tiger", "zebra", "monkey", "duck", "cow"];

//defining animals as objects;
var horse = {name:"horse", picture:"assets/images/horse.jpg", audio:"assets/audios/horse.mp3"};
var dog = {name:"dog", picture:"assets/images/dog.jpg", audio:"assets/audios/dog.mp3"};
var cat = {name:"cat", picture:"assets/images/cat.jpg", audio:"assets/audios/cat.mp3"};
var elephant = {name:"elephant", picture:"assets/images/elephant.jpg", audio:"assets/audios/elephant.mp3"};
var lion = {name:"lion", picture:"assets/images/lion.jpg", audio:"assets/audios/lion.mp3"};
var tiger = {name:"tiger", picture:"assets/images/tiger.jpg", audio:"assets/audios/tiger.mp3"};
var zebra = {name:"zebra", picture:"assets/images/zebra.jpg", audio:"assets/audios/zebra.mp3"};
var monkey = {name:"monkey", picture:"assets/images/monkey.jpg", audio:"assets/audios/monkey.mp3"};
var duck = {name:"duck", picture:"assets/images/duck.jpg", audio:"assets/audios/duck.mp3"};
var cow = {name:"cow", picture:"assets/images/cow.jpg", audio:"assets/audios/cow.mp3"};

//creating animals, an array of animals objects
var animals = [ horse, dog, cat, elephant, lion, tiger, zebra, monkey, duck, cow];

// variables for each round. they are reset each round
// a game round is when displaying a new word
var guessesLeft = 10;
var guessedLetters = [];
var currentAnimal = {};
var blanks = "";


// resetGame is a function called to reset the entire game
var resetGame = function(){

	wins = 0;
	losses = 0;
	animalsIndex = 0;
	currentAnimal = {}
	resetRound();
}

// restRound is a function called to reset the game round
var resetRound = function(){

	guessesLeft = 10;
	guessedLetters = [];
	blanks = "";

	currentAnimal = animals[animalsIndex];
	//animalsIndex++;
	
	for(var i=0; i < currentAnimal.name.length; i++){

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
		document.getElementById("selected-image").src = currentAnimal.picture;
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


		for(var i = 0; i<currentAnimal.name.length; i++ ){


			if( userGuess === currentAnimal.name.charAt(i)){
			
				blanks = replaceLetter(blanks, i, userGuess);
				match = true;
			
			}
		
	
		}


		updateGuessedLetters(userGuess, guessedLetters, match);



		console.log(blanks);
		document.getElementById("word").innerHTML = blanks;


		var complete = checkCompletion (blanks, currentAnimal.name, guessesLeft);

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

