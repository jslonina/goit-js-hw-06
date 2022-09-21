let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector("#value");
counter.textContent = `${counterValue}`;

const decFunc = () => {
    counter.textContent = `${counterValue-=1}`
}

const incFunc = () => {
    counter.textContent = `${counterValue+=1}`
}

decrement.addEventListener("click",decFunc)
increment.addEventListener("click",incFunc)