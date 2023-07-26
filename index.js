"use strict";

//bookmark button

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

// //answer button

const showAnswer = document.querySelector('[data-js="showAnswer"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');

// showAnswer.addEventListener("click", () => {
//   showAnswerF();
// });

// function showAnswerF() {
//   showAnswer.setAttribute("hidden", "");
// }

showAnswer.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  showAnswer.textContent = showAnswer.classList.toggle("card__answer--active")
    ? "Hide answer"
    : "Show answer";
});
