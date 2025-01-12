"use strict";

const input__form = document.querySelector(".input-form");
const confirmBtn = document.querySelector(".confirm");
const continueBtn = document.querySelector(".continue");
const success = document.querySelector(".complete");
const nameInput = document.getElementById("name");
const cardNumber = document.getElementById("cardNumber");
const expDate = document.querySelectorAll(".exp__date");
const mon = document.querySelector("#month");
const year = document.querySelector("#year");
const cvcInput = document.getElementById("cvc__input");
const CardName = document.querySelector(".card-name");
const CardNumber = document.querySelector(".card__number");
const CardMonth = document.querySelector(".mon");
const CardYear = document.querySelector(".yr");
const CardCvc = document.querySelector(".cvc-p");
const text__error = document.getElementById("text__error");
const num__error = document.getElementById("num__error");
const exp__error = document.getElementById("exp__error");
const cvc__error = document.getElementById("cvc__error");

//Function that add a space after every 4 characters
const formatCardNumber = () => {
  let value = cardNumber.value.replace(/\D/g, "");
  let formattedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }
  cardNumber.value = formattedValue;
};

// function that adds the value from the input to the card
const addToCard = () => {
  CardName.textContent = nameInput.value;
  CardNumber.textContent = cardNumber.value;
  CardMonth.textContent = mon.value.padStart(2, 0);
  CardYear.textContent = year.value.padStart(2, 0);
  CardCvc.textContent = cvcInput.value.padStart(3, 0);
};

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isVaild = true;

  // Name Validation
  if (nameInput.value === "") {
    isVaild = false;
    text__error.textContent = "can't be blank";
    nameInput.style.border = "1px solid var(--red)";
  } else if (/\d/.test(nameInput.value)) {
    isVaild = false;
    text__error.textContent = "Wrong format, letters only";
    nameInput.style.border = "1px solid var(--red)";
  } else {
    text__error.textContent = "";
    nameInput.style.border = "";
  }

  // Number Validation
  if (cardNumber.value === "") {
    isVaild = false;
    num__error.textContent = "can't be blank";
    cardNumber.style.border = "1px solid var(--red)";
  } else if (cardNumber.value.length != cardNumber.getAttribute("maxlength")) {
    isVaild = false;
    num__error.textContent = "Wrong format, values must be 16";
    cardNumber.style.border = "1px solid var(--red)";
  } else {
    num__error.textContent = "";
    cardNumber.style.border = "";
  }

  // EXP.DATE Validation
  expDate.forEach((date, _, allDate) => {
    if (date.value === "") {
      isVaild = false;
      exp__error.textContent = "can't be blank";
      date.style.border = "1px solid var(--red)";
    } else if (allDate[0].value > 12) {
      isVaild = false;
      exp__error.textContent = "invalid month";
      allDate[0].style.border = "1px solid var(--red)";
    } else {
      exp__error.textContent = "";
      date.style.border = "";
    }
  });

  // CVC Validation
  if (cvcInput.value === "") {
    isVaild = false;
    cvc__error.textContent = "can't be blank";
    cvcInput.style.border = "1px solid var(--red)";
  } else if (/[a-zA-Z]/.test(cvcInput.value)) {
    isVaild = false;
    cvc__error.textContent = "Wrong format, numbers only";
    cvcInput.style.border = "1px solid var(--red)";
  } else {
    cvc__error.textContent = "";
    cvcInput.style.border = "";
  }

  // SUCCESS MESSAGE
  if (isVaild) {
    addToCard();
    nameInput.value = "";
    cardNumber.value = "";
    mon.value = "";
    year.value = "";
    cvcInput.value = "";
    success.classList.remove("hidden");
    input__form.classList.add("hidden");
  }
});

// ContinueBtn: Returns all input to its default
continueBtn.addEventListener("click", () => {
  success.classList.add("hidden");
  input__form.classList.remove("hidden");
  CardName.textContent = "Jane Appleseed";
  CardNumber.textContent = "0000 0000 0000 0000";
  CardMonth.textContent = "00";
  CardYear.textContent = "00";
  CardCvc.textContent = "000";
});
