const readline = require('readline-sync');
const WIN_SCORE = 2;
const OPTIONS = {};

const LONGHAND_OPTIONS = Object.keys(OPTIONS);
const SHORTHAND_OPTIONS = [];
Object.values(OPTIONS).forEach(object => {
  SHORTHAND_OPTIONS.push(object.shorthand);
});
const OPTIONS_TO_DISPLAY = Object.entries(OPTIONS).map(option => `${option[0]} (${option[1].shorthand})`);

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  history: {},

  displayWelcomeMessage() {},

  displayIfHistory(response) {}

  displayMoveChoices() {},

  determineRoundWinner() {},

  displayRoundWinner(winner) {},

  updateScore(winner) {},

  displayScore() {},

  isGrandWinner() {},

  displayGrandWinner() {},

  playAgain() {},

  resetScores() {},

  displayGoodbyeMessage() {},

  play() {};

function createPlayer() {
  return {
    move: null,
    score: 0,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    addChoice(choice) {
      this.move = choice;
      RPSGame.history.humanMoves.push(choice);
    },

    choose() {
      while (true) {
        console.log(`Please choose ${OPTIONS_TO_DISPLAY.join(', ')}:`);
        let choice = readline.question().toLowerCase();
        RPSGame.displayIfHistory(choice);
        if (LONGHAND_OPTIONS.includes(choice)) {
          this.addChoice(choice);
          break;
        } else if (SHORTHAND_OPTIONS.includes(choice)) {
          choice = Object.entries(OPTIONS).filter(option => {
            return option[1].shorthand === choice;
          })[0][0];
          this.addChoice(choice);
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
    getRandomChoice() {
      return LONGHAND_OPTIONS[Math.floor(
        Math.random() * LONGHAND_OPTIONS.length)];
    },

    choose() {
      let choice;
      let computerMoves = RPSGame.history.computerMoves;
      choice = this.getRandomChoice();
      if (choice === computerMoves[computerMoves.length - 1]) {
        choice = this.getRandomChoice();
      }
      this.move = choice;
      RPSGame.history.computerMoves.push(choice);
    },
  };

  return Object.assign(playerObject, computerObject);
}

RPSGame.play();