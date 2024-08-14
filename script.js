'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct NUmber🎉';

document.querySelector('.number').textContent = 9;

document.querySelector('.score').textContent = 12;

document.querySelector('.guess').Value = 10;
console.log(document.querySelector('.guess').Value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = 20;

let highScore = 0;

//procedure of refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //it"s when theren't no Number
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ There is No NUmber';
    displayMessage('❌ There is No NUmber');

    //it"s when  we win the Game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct NUmber🎉';
    displayMessage('Correct NUmber🎉');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    //it"s when the Guess ids different from secretNumber
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '⬆ Too high' : '⬇ Too Low';
      displayMessage(guess > secretNumber ? '⬆ Too high' : '⬇ Too Low');
      scoreNumber = scoreNumber - 1;
      // document.querySelector('.score').textContent = scoreNumber;
      displayScore(scoreNumber);
    } else {
      // document.querySelector('.message').textContent = '💘 You lost';
      displayMessage('💘 You lost');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }

    //it"s when the Guess is too high
  } //else if (guess > secretNumber) {
  //   if (scoreNumber > 1) {
  //     document.querySelector('.message').textContent = '⬆ Too high';
  //     scoreNumber = scoreNumber - 1;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   } else {
  //     document.querySelector('.message').textContent = '💘 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //it"s when the guess is too low
  // } else if (guess < secretNumber) {
  //   if (scoreNumber > 1) {
  //     document.querySelector('.message').textContent = '⬇ Too Low';
  //     scoreNumber--;
  //     document.querySelector('.score').textContent = scoreNumber;
  //   } else {
  //     document.querySelector('.message').textContent = '💘 You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// const scoreNumber='',
// let secretNumber='';
// coding challenge

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  scoreNumber = 20;
  // document.querySelector('.score').textContent = scoreNumber;
  displayScore(scoreNumber);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start guessing.....';
  displayMessage('Start guessing.....');
  document.querySelector('.guess').value = '';
});
