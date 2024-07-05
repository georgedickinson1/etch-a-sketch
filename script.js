let userNumber = prompt("What would you like the grid size to be?")
let gridSize = userNumber ** 2;

const gridContainer = document.querySelector(".grid-container");

for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = `calc(${100 / userNumber}%)`;
    div.style.height = `calc(${100 / userNumber}%)`;
    gridContainer.appendChild(div);
}
