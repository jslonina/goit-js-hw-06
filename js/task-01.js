const listAll = document.querySelectorAll("li.item")
console.log(`Number of categories: ${listAll.length}`)

listAll.forEach(element =>{
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})