'use strict';
/*
//selecting something
console.log(document.querySelector('.message').textContent); //reading the content
document.querySelector('.message').textContent = 'Make a Guess!'; //changing the content
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value); //value to see input value not text content
document.querySelector('.guess').value = 45;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// const displayMessage = function(message){
//     document.querySelector('.message').textContent =message;
// }
// console.log(Secretnumber);
//document.querySelector('.number').textContent = secretNumber;

//CHALLENGE 1 IMPLEMENT THE AGAIN BOTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess);
  //NO ANSWER
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please First Guess a Number';

    //WIN
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'WHOOO! HOO!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH!!' : 'TOO LOW!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000 ';
    }
  }
});

//TOO HIGH
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO HIGH!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'YOU LOST!!';
//     }
//     //TOO LOW
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'TOO LOW!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'YOU LOST!! HAHAHAHA';
//     }
//   }
// });
