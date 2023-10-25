const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const valueSpan = document.querySelector('#value');

btnPlus.addEventListener('click', handleClickPlus);
btnMinus.addEventListener('click', handleClickMinus);

let counterValue = 0;
updateCounterValue();

function handleClickPlus() {
    counterValue += 1;
    updateCounterValue();
}

function handleClickMinus() {
    counterValue -= 1;
    updateCounterValue();
}

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}


