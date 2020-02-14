const difficultyLevel = Object.freeze({
  easy: {id: 1, title: 'easy', numbersLength: 3, moves: Infinity},
  normal: {id: 2, title: 'normal', numbersLength: 4, moves: 4},
  hard: {id: 3, title: 'hard', numbersLength: 5, moves: 5},
  extreme: {id: 4, title: 'extreme', numbersLength: 6, moves: 6},
});

module.exports = {
  difficultyLevel,
}