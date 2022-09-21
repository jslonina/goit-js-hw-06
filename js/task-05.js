const outputTxt = document.querySelector("#name-output");
const inputTxt = document.querySelector("#name-input");

inputTxt.addEventListener("input", (event) => {
    outputTxt.textContent = event.currentTarget.value?event.currentTarget.value:"Anonymous"
})