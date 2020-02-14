const readlineSync = require('readline-sync');
const { difficultyLevel } = require('./types');
const { generateRandomNumber } = require('./common');

const game = () => {
  console.log('Choose your level: ');
  // + для преобразования строки в число
  const chooseLvl = +readlineSync.keyIn(`
    [${difficultyLevel.easy.id}] - ${difficultyLevel.easy.title}
    [${difficultyLevel.normal.id}] - ${difficultyLevel.normal.title}
    [${difficultyLevel.hard.id}] - ${difficultyLevel.hard.title}
    [${difficultyLevel.extreme.id}] - ${difficultyLevel.extreme.title}
  : `, {limit: '$<1-4>'});

  const selectedLvl = Object.values(difficultyLevel).find((el) => el.id === chooseLvl);
  let availableMoves = selectedLvl.moves;

  selectedLvl.id === difficultyLevel.extreme.id && console.log('\nYou fucking crazy, that\'s so hard!');

  console.log(`
    Allright, your choise ${selectedLvl.title} mode, i will guess a ${selectedLvl.numbersLength}-digit number.
    You have ${selectedLvl.moves} moves to guess that's!\n
  `);

  const randomNumber = generateRandomNumber(selectedLvl.numbersLength);

  while(availableMoves > 0) {
    const userGuess = readlineSync.question(`What the number do you think? You have ${availableMoves} moves. Type this: `);
    if (userGuess !== randomNumber) {
      const balls = userGuess.split('').reduce((acc, el, key) => acc + (el === randomNumber[key] ? 1 : 0), 0);
      const cows = userGuess.split('').reduce((acc, el, key) => acc + (~randomNumber.indexOf(el) && el !== randomNumber[key] ? 1 : 0), 0);
      availableMoves--;
      console.log(`${balls} balls and ${cows} cows`);
    } else {
      console.log(`You win! My number really was ${userGuess}`);
      break;
    }
  }
  
  availableMoves === 0 && console.log(`You loose! My number was ${randomNumber}`);

  const playAgain = +readlineSync.keyIn(`Play again?
    [1] - Yes
    [2] - No
  : `, {limit: '$<1-2>'});

  playAgain === 1 && game();
}

module.exports = {
  game,
}