const body = document.body;
const Btn = document.querySelector(".change-color");
const text = document.querySelector(".color");

Btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
