const size = document.querySelector("#font-size-control");
const letter = document.querySelector("#text");

size.addEventListener("input", () => {
    letter.style.fontSize = size.value +"px";
})