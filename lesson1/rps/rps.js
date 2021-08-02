const readline = require('readline-sync');
const WIN_SCORE = 2;
const OPTIONS = {
  rock: {
    shorthand: 'r',
    beats: ['scissors', 'lizard']
  },
  paper: {
    shorthand: 'p',
    beats: ['rock', 'spock']
  },
  scissors: {
    shorthand: 's',
    beats: ['paper', 'lizard']
  },
  lizard: {
    shorthand: 'l',
    beats: ['spock', 'paper']
  },
  spock: {
    shorthand: 'k',
    beats: ['scissors', 'rock']
  }
};

const LONGHAND_OPTIONS = Object.keys(OPTIONS);
const SHORTHAND_OPTIONS = [];
Object.values(OPTIONS).forEach(object => {
  SHORTHAND_OPTIONS.push(object.shorthand);
});
const OPTIONS_TO_DISPLAY = Object.entries(OPTIONS).map(option => `${option[0]} (${option[1].shorthand})`);

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log(`Please choose ${OPTIONS_TO_DISPLAY.join(', ')}:`);
        choice = readline.question().toLowerCase();
        if (choice === 'history') {
          RPSGame.displayHistory();
          continue;
        }
        if (LONGHAND_OPTIONS.includes(choice)) {
          this.move = choice;
          RPSGame.history.humanMoves.push(choice);
          break;
        } else if (SHORTHAND_OPTIONS.includes(choice)) {
          choice = Object.entries(OPTIONS).filter(option => option[1].shorthand === choice)[0][0];
          this.move = choice;
          RPSGame.history.humanMoves.push(choice);
          break;
        } else {
          console.log('Sorry, invalid choice.');
        }
      }
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let choice = LONGHAND_OPTIONS[Math.floor(Math.random() * LONGHAND_OPTIONS.length)];
      this.move = choice;
      RPSGame.history.computerMoves.push(choice);
    },
  };

  return Object.assign(playerObject, computerObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  
  history: {
    humanMoves: [],
    computerMoves: [],
    winners: []
  },

  displayWelcomeMessage() {
    console.log(`Welcome to ${LONGHAND_OPTIONS.join(', ')}!`);
    console.log(`First to ${WIN_SCORE} is the Grand Winner!`);
    console.log(`Type "history" at any point to see past moves.`);
  },
  
  displayHistory() {
    let humanMoves = this.history.humanMoves;
    let computerMoves = this.history.computerMoves;
    
    console.log("Rnd | Hum | Com | Win");
    humanMoves.forEach((_, index) => {
      console.log(`${index + 1}   | ${humanMoves[index].slice(0, 3)} | ` +
      `${computerMoves[index].slice(0, 3)} | ${this.history.winners[index].slice(0, 3)}`);
    });
    
    readline.question("Press any enter to continue: ");
  },
  
  displayMoveChoices() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  determineRoundWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
  
    if (OPTIONS[humanMove].beats.includes(computerMove)) {
      return 'human';
    } else if (OPTIONS[computerMove].beats.includes(humanMove)) {
      return 'computer';
    } else {
      return 'tie';
    }
  },
  
  displayRoundWinner(winner) {
    if (winner === 'human') console.log("You won the round!");
    if (winner === 'computer') console.log("Comoputer won the round!");
    if (winner === 'tie') console.log("It's a tie!");
  },
  
  updateScore(winner) {
    if (winner === 'human') this.human.score += 1;
    if (winner === 'computer') this.computer.score += 1;
    
    this.history.winners.push(winner);
  },
  
  displayScore() {
    console.log(`Human: ${this.human.score}\nComputer: ${this.computer.score}`);
  },
  
  isGrandWinner() {
    return (this.human.score === WIN_SCORE || this.computer.score === WIN_SCORE);
  },
  
  displayGrandWinner() {
    if (this.human.score === WIN_SCORE) console.log("You are the Grand Winner!");
    if (this.computer.score === WIN_SCORE) console.log("Computer is the Grand Winner!");
  },

  playAgain() {
    while (true) {
      console.log('Would you like to play again? (y/n)');
      let answer = readline.question();
      if (answer === 'history') {
        this.displayHistory();
        continue;
      }
      return answer.toLowerCase()[0] === 'y';
    }
  },
  
  resetScores() {
      this.human.score = 0;
      this.computer.score = 0;
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing ${LONGHAND_OPTIONS.join(', ')}. Goodbye!`);
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayMoveChoices();
        let roundWinner = this.determineRoundWinner();
        this.displayRoundWinner(roundWinner);
        this.updateScore(roundWinner);
        this.displayScore();
        if (this.isGrandWinner()) {
          this.displayGrandWinner();
          break;
        }
      }
      if (!this.playAgain()) break;
      this.resetScores();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();