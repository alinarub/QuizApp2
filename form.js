"use strict";

//SUBMIT FORM

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const newCard = document.createElement("li");
  newCard.classList.add("card-list__item");
  cardContainer.append(newCard);

  document.body.append(form);
  console.log("test");
});

//MAX LENGTH

const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const yourAnswer = document.querySelector('[data-js="yourAnswer"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');

yourQuestion.addEventListener("input", () => {
  amountLeftQuestion.innerText = 150 - yourQuestion.value.length;
});

yourAnswer.addEventListener("input", () => {
  amountLeftAnswer.innerText = 150 - yourAnswer.value.length;
});
