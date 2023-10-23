const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients"); 
// const h1 = document.createElement("h1");
// h1.textContent = "Ingredients";
// ul.appendChild(h1);

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
li.textContent = ingredient;
  li.classList.add("item");

ul.appendChild(li);
});


