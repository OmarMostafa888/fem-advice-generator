const adviceId = document.getElementById("advice-id");
const advice = document.querySelector(".card__advice");
const btn = document.querySelector(".card__btn");
console.log(adviceId);

function setAdviceId(json) {
  adviceId.innerHTML = json.slip.id;
}

function setAdvice(json) {
  advice.innerHTML = json.slip.advice;
}

btn.addEventListener("click", () =>
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      setAdviceId(json);
      setAdvice(json);
    })
);
