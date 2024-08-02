"use strict";

let setNum = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = setNum; 


let displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener("click", function () {

  const GUESS = Number(document.querySelector('.guess').value);
  
  if (!GUESS) {

    displayMessage("No Number entered");
  } 
  else if (GUESS === setNum) {
    
    displayMessage("Correct!");
    document.querySelector('.number').textContent = setNum; 

    if(score > highScore) { highScore = score };
    document.querySelector('.highscore').textContent = highScore;
  } 
  else {
    
    if(GUESS < setNum){displayMessage("Too low");}
    else{displayMessage("Too high");}
    score -= 1;
    document.querySelector('.score').textContent = score;
    if(score < 1) {displayMessage("You lost the game");}
  }
});
