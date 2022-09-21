const form = document.querySelector(".login-form");

form.addEventListener("submit",(event) => {
event.preventDefault();
const {
    elements: {email, password}
} = event.currentTarget;
if (email.value ===""||password.value===""){
    return alert("Empty fields!");
}
console.log (`email:${email.value}, password:${password.value}`);
event.currentTarget.reset();
})
