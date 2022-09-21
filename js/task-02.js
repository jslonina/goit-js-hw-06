const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const createList = element =>{
  const newElem = document.createElement("li");
  newElem.classList.add("item");
  newElem.textContent=element;
  return newElem;
}

const ingCreate = ingredients.map(createList);

list.append(...ingCreate);
