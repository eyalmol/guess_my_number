'use strict';
/* 72) selcting and manipulating elemnts

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// 73)handling click events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const disaplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when the player click the 'check btn' without adding an input number
  if (!guess) {
    disaplayMessage('No Number⛔');
    //when player wins===guess the right number
  } else if (guess === secretNumber) {
    disaplayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess in wrong
  } else if (guess !== secretNumber) {
    //when the score is higher then 1
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too high!' : '📉Too low!';
      disaplayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      //when the player lose thr game
    } else {
      //   document.querySelector('.message').textContent = '💥You lost the game!';
      disaplayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is less then the secretNumber
  //when the guess is higher then the seceretNumber
  //   } else if (guess > secretNumber) {
  //     //when the score is higher then 1
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       //when the player lose thr game
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when guess is less then the secretNumber
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       //when the player lose thr game when his guess is less then scanerio
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
}); /*the function is the event handler to the btn click(the event that we're listene to)
we don't have to call this fuction because the javaScript will do whenever
the event(the btn click) is being occure*/

//handling the again btn option
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Srart guessing...';
  disaplayMessage('Srart guessing...');
});
