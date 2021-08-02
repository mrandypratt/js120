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

const DISPLAYED_OPTIONS = Object.entries(OPTIONS).filter(option => option[1].shorthand === 'r')[0][0]

console.log(DISPLAYED_OPTIONS)