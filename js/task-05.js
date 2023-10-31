const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  spanOutput.textContent = textInput.value.trim() || "Anonymous";
});