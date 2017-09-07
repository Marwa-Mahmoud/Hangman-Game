# Hangman-Game

### Description
This is a web  Hangman game with the theme of animals. The player wins when he guesses the correct animal and then a picture and sound of the animal is displayed.

### Game Logic
- The computer chooses an animal and displays blanks equal to the number of letters of this animal.
- The user starts with 15 guesses. 
- The user guesses a letter and enters it.
- Each time the users enters a letter, the guesses decrease by one. 
- If the user enters a correct letter it is displayed replacing its corresponding blank
- If the user enters a wrong letter it is added to the letters already guessed. 
- If you guess a letter more than once, it is not added to the letters already guessed and the number of guesses doesn't decrease because it is already guessed before.
- If the word is correctly completed then the picture of the animal is displayed and the sound of the animal is played. And the game is reset.
- If the number of guesses is zero and the user didn't know the word, the user loses and the game is also reset.