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

  if (guessCount === 6) {
    button.className = "btnDisabled";
    console.log("STOPPED");
    if (answer !== input.toUpperCase()) {
      alert(`You couldn't find the word!\n The word was ${answer}`);
    }
  } else {
    console.log("CLICKED");
    const guess = guesses[guessCount].children;
    guessCount++;

    const userAnswerArr = input.toUpperCase().split("");
    console.log(input);
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
            elements[j].style.backgroundColor = "yellow";
            guess[i].style.backgroundColor = "yellow";
            break;
          } else {
            elements[j].style.backgroundColor = "gray";
            break;
          }
          break;
        }
      }
    }
  }
  if (answer === input.toUpperCase()) {
    function showPopup() {
      const popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
  }
});
