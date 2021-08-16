/*
Tic Tac Toe is a game where players take turn placing markers on a game board.
One player is a computer and the other is human
the markers are 'x' and 'o'
Player 'x' goes first
The following Records are kept:
  -Score (Wins, Losses, Ties)
  -Move History


Each round consists of the following:
  -Current Player selects a space on the game board
    -Check for valid move until move is valid
  -Move added to Move History
  -Check for Winner
    -Winner === true
      -Display winner
      -Add winner to score
      -End Game
  -Check for Tie
    -Tie === true
      -Display Tie
      -End Game
  -Switch Current Player
  -Loop
*/

const readline = require("readline-sync");

class Player {
  constructor() {
    //STUB
  }
  
  mark() {
    //STUB
  }
}

class Computer extends Player {
  constructor() {
    super();
    //STUB
  }
}

class Human extends Player {
  constructor() {
    super();
    //STUB
  }
}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";
  
  constructor(initialMarker = Square.UNUSED_SQUARE) {
    this.marker = initialMarker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let i = 1; i <= 9; i++) {
      this.squares[i] = new Square();
    }
  }
  
  display() {
    console.log("");
    console.log("     |     |     ");
    console.log(`  ${this.squares['1'].marker}  |  ${this.squares['2'].marker}  |  ${this.squares['3'].marker}  `);
    console.log("     |     |     ");
    console.log("-----+-----+-----");
    console.log("     |     |     ");
    console.log(`  ${this.squares['4'].marker}  |  ${this.squares['5'].marker}  |  ${this.squares['6'].marker}  `);
    console.log("     |     |     ");
    console.log("-----+-----+-----");
    console.log("     |     |     ");
    console.log(`  ${this.squares['7'].marker}  |  ${this.squares['8'].marker}  |  ${this.squares['9'].marker}  `);
    console.log("     |     |     ");
    console.log("");
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
  
  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();
      
      this.humanMoves();
      if (this.gameOver()) break;
      
      this.computerMoves();
      if (this.gameOver()) break;
      
      //Break to keep from infinite loop
      break;
    }
    
    this.displayResults();
    this.displayGoodbyeMessage();
  }
  
  displayWelcomeMessage() {
    console.log("Welcome!");
  }
  
  humanMoves() {
    let choice;
    
    while (true) {
      choice = readline.question("Choose a square between 1 and 9: ");
      
      let choiceInteger = parseInt(choice, 10);
      if (choiceInteger >= 1 || choiceInteger <= 9) break;
      
      console.log("Invalid Choice\n");
    }
    
    
  }
  
  computerMoves() {
    console.log("Computer Moves")
  }
  
  displayResults() {
    console.log("Results");
  }
  
  displayGoodbyeMessage() {
    console.log("Goodbye!");
  }
  
  gameOver() {
    //STUB
    return false;
  }
}

let game = new TTTGame();
game.play();