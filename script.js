let wrongGuesses = 0;  // Track number of wrong guesses
let correctAnswer = "tasha";  // The correct answer

function checkPassword() {
  var enteredPassword = document.getElementById("password-input").value;
  var correctPassword = "06112004";

  // Check if password is correct
  if (enteredPassword === correctPassword) {
    // Hide the password overlay
    document.getElementById("password-overlay").style.display = "none";
    
    // Show the game content
    document.getElementById("game-content").style.display = "block";
  } else {
    // Display an error message if password is incorrect
    document.getElementById("error-message").style.display = "block";
  }
}

function checkAnswer() {
  var userGuess = document.getElementById("userGuess").value.toLowerCase();
  // Ensure the guess is 5 letters
  if (userGuess.length !== 5) {
    document.getElementById("result").innerHTML = "Please enter a 5-letter word!";
    return;
  }

  var resultHTML = '';
  
  // Check each letter
  for (var i = 0; i < 5; i++) {
    var letter = userGuess[i];
    var resultClass = '';

    // Check for green (correct letter, correct position)
    if (letter === correctAnswer[i]) {
      resultClass = 'green';
    } 
    // Check for yellow (correct letter, wrong position)
    else if (correctAnswer.includes(letter)) {
      resultClass = 'yellow';
    } 
    // Check for gray (incorrect letter)
    else {
      resultClass = 'gray';
    }

    resultHTML += `<div class="letter ${resultClass}">${letter.toUpperCase()}</div>`;
  }

  document.getElementById("result").innerHTML = resultHTML;

  // If the guess is wrong, increment the wrong guess counter
  if (userGuess !== correctAnswer) {
    wrongGuesses++;
    
    // Reveal the clue after 3 wrong guesses
    if (wrongGuesses >= 3) {
      document.getElementById("clue-text").style.display = "block"; // Show the clue
    }
  } else {
    // If correct, reveal the next clue in an envelope animation
    document.getElementById("nextClue").style.display = "block";
  }
}
