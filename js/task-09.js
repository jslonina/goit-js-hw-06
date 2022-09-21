function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const nameColor = document.querySelector(".color");
const backgroundBtn = document.querySelector(".change-color");

backgroundBtn.addEventListener("click", ()=> {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
})
