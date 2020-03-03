class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    // ... your code goes here
    let randomPos = Math.floor(Math.random() * this.words.length);
    return this.words[randomPos];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    return (this.guessedLetters += letter);
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    return this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
      console.log(this.secretWord)
      if (this.secretWord.length === this.guessedLetters.length) {
        return true;
      } else {
        return false;
      }  
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", event => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa"
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    //console.log(hangman.secretWord)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    // ... your code goes here
    
  });
}

document.addEventListener("keydown", event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.keyCode)
  console.log(hangman.checkClickedLetters(event.key))
  if(hangman.checkIfLetter(event.keyCode)&&hangman.checkClickedLetters(event.key)){
    if (hangman.secretWord.includes(event.key)) {
      //add it to correct letters
      let idx=hangman.secretWord.indexOf(event.key)
        hangman.addCorrectLetter(event.key)
        hangmanCanvas.writeCorrectLetter(idx)
        //hangman.checkWinner()    
    } else {
      //add it to wrong letters
      hangman.addWrongLetter(event.key)
      hangmanCanvas.writeWrongLetter(event.key,hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
      //hangman.checkGameOver()
    }
  }else{ 
    console.log("Not a letter or repeated letter")
  }
  if(hangman.checkWinner()){
    alert("You Won")
  }
  if(hangman.checkGameOver()){
    alert("You Lost")
  }
});
