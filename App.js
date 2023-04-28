import RandomWord from "./random.js";
import findObj from "./find.js";

const answer = RandomWord();
console.log(answer);

const elements = document.getElementById("letters").children;
const guesses = document.getElementById("guessBoxes").children;

const form = document.getElementById("input");

const button = document.getElementById("button");

let guessCount = 0;


button.addEventListener("click", (event) => {
  const input = form.value;
  let isString = false;
  const userAnswerArr = input.toUpperCase().split("");


  for (let i = 0; i < userAnswerArr.length; i++) {
    if (isNaN(parseInt(userAnswerArr[i]))) {
      console.log("number değilim")
      isString = true;
    }
    else{
      isString = false;
      break;
    }
  }

  if (input.length !== 5 || !isString) {
    alert("You must enter 5 letter word!");
    return;
  }

  if (guessCount === 5) {
    setTimeout(function () {
      button.className = "btnDisabled";
      button.disabled = true;
      if (answer !== input.toUpperCase()) {
        alert(`You couldn't find the word!\n The word was ${answer}`);
        window.location.reload();
      }
    }, 0);
  }

  const guess = guesses[guessCount].children;
  guessCount++;

  for (let i = 0; i < userAnswerArr.length; i++) {
    //looping the entered words letters

    guess[i].innerHTML = `${userAnswerArr[i]}`;

    const answerObj = findObj(userAnswerArr[i], i, answer);
    for (let j = 0; j < elements.length; j++) {
      //looping the keys below

      if (elements[j].innerHTML === answerObj.letter) {
        if (answerObj.rightPlace) {
          elements[j].style.backgroundColor = "green";
          guess[i].style.backgroundColor = "green";
          break;
        }
        if (answerObj.include) {
          elements[j].style.backgroundColor = "#ffa000";
          guess[i].style.backgroundColor = "#ffa000";
          break;
        } else {
          elements[j].style.backgroundColor = "gray";
          break;
        }
        break;
      }
    }
  }

  if (answer === input.toUpperCase()) {
    setTimeout(function () {
      alert("Congratulations! You Won 🏆!");
    }, 0);
    window.location.reload();
  }
});
