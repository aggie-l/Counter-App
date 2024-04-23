const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const saveBtn = document.querySelector(".save-btn");
const resetBtn = document.querySelector(".reset-btn");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const body = document.querySelector("body");

let counter = 0;
let resultArray = [];

const displayBackgroundColor = (number) => {
  if (number === 0) {
    body.style.background = "white";
    count.style.color = "black";
  } else if (number > 0 && number < 5) {
    body.style.background = "#EBF4FC";
    count.style.color = "#3785C3";
  } else if (number >= 5) {
    body.style.background = "#E1EFE2";
    count.style.color = "#539656";
  } else if (number < 0) {
    body.style.background = "#F9E8E8";
    count.style.color = "#DC5652";
  }
};

minusBtn.addEventListener("click", () => {
  counter--;
  count.innerHTML = counter;
  displayBackgroundColor(counter);
});

plusBtn.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;
  displayBackgroundColor(counter);
});

saveBtn.addEventListener("click", () => {
  if (!resultArray.includes(counter)) {
    resultArray.push(counter);
  }
  let arrToDisplay = resultArray.join(", ");
  result.innerHTML = `Result: ${arrToDisplay}`;
});

resetBtn.addEventListener("click", () => {
  resultArray = [];
  counter = 0;
  result.innerHTML = "Result:";
  count.innerHTML = counter;
  body.style.background = "white";
  count.style.color = "black";
});