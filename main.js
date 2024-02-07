let button = document.querySelector("button");
let number = document.querySelector("input[type='radio']:checked");
let span = document.querySelector(".card.thank span");
let cardThank = document.querySelector(".card.thank");
let thankMsg = document.querySelector(".card.thanks p");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let number = document.querySelector("input[type='radio']:checked");
  span.innerHTML += ` ${number.value} out of 5`;

  this.parentNode.parentNode.style.display = "none";
  cardThank.style.display = "block";
});
