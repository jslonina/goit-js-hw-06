const txtInput = document.querySelector("#validation-input")

txtInput.addEventListener("blur", () => {
    if (txtInput.value.length === Number(txtInput.dataset.length)){
        txtInput.classList.add("valid")
        txtInput.classList.remove("invalid")
    }
    else{
        txtInput.classList.remove("valid")
        txtInput.classList.add("invalid")
    }
})