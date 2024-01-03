const emojiDetails = [
  {
    description: "Thumbs Up",
    emoji: "👍",
  },
  {
    description: "smiling face",
    emoji: "😊",
  },
  {
    description: "lughing",
    emoji: "😂",
  },
  {
    description: "sleeping",
    emoji: "😴",
  },
  {
    description: "hug",
    emoji: "🤗",
  },
];

let score = 0;
let currentEmojiIndex = 0;
let second = 10;
let timer;

const getInput = document.getElementById("guess_input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerClock = document.getElementById("times");
const nextQuestion = document.getElementById("next");

// function shuffle(array) {
//     let currentIndex = array.length-1;
//     let randomIndex, temporaryValue;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
// }

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  timerClock.textContent = `Timer: ${second}`;
}
function checkGuess() {
  const guess = getInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct Answer";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }
  scoreElement.textContent = `Score: ${score}`;
  getInput.value = "";
  getInput.focus();
  nextEmoji();
}
function nextEmoji() {
  currentEmojiIndex++;
  getInput.disabled = false;
  clearInterval(timer); // Clear the existing timer

  setTimeout(() => {
    resultElement.textContent = "";
  }, 2000);
  if (currentEmojiIndex === emojiDetails.length) {
    currentEmojiIndex = 0;

    // shuffle();
  }
  setTimer(); // Start a new timer
  displayEmoji();
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});
nextQuestion.addEventListener("click", () => {
  //     getInput.disabled = false;
  //   setTimer(); // Start the timer again
  //   second = 10; // Reset the timer to 10 seconds (or your desired initial time)
  //   score = 0; // Reset the score to 0
  nextEmoji();
    getInput.value = "";
    timerClock.classList.remove("red-text");

  // displayEmoji(); // Display the first emoji
});

const loadGame = document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  setTimer();
});
function setTimer() {
  second = 10; // Reset the timer to 10 seconds
  timer = setInterval(() => {
    second--;
    timerClock.textContent = `Timer: ${second}`;
    if (second <= 0) {
      endGame();
    }
  }, 1000);
}
function endGame() {
  clearInterval(timer);
  getInput.disabled = true;
  timerClock.textContent = "Time Out";
  if (timerClock.textContent === "Time Out") {
    const redText = timerClock.classList.add("red-text");
    console.log(`time up`);
  } else {
    timerClock.classList.remove("red-text");
    console.log(`class removed`);
  }
}
