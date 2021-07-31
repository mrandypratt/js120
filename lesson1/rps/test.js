function createHuman() {

}

return {
  move: null,

};

function choose() {
  let choice;
  const choices = ['rock', 'paper', 'scissors'];

  while (true) {
    console.log('Please choose rock, paper, or scissors:');
    choice = readline.question();
    if (choices.includes(choice)) break;
    console.log('Sorry, invalid choice.');
  }
  this.move = choice
}

let human = createHuman();
console.log(human);