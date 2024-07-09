// Grid Lines Button 

let toggledGrid = true;

const gridLinesButton = document.querySelector(".grid-lines");
gridLinesButton.addEventListener("click", () => {
    if (toggledGrid === true) {
        // Grid Lines On
        gridItem.forEach(item => {
            item.style.border = "none";
        });
        toggledGrid = false;
        gridLinesButton.style.backgroundColor = "#1ED760";
        gridLinesButton.style.color = "#535353";
        gridLinesButton.addEventListener("mouseenter", () => {
            gridLinesButton.style.backgroundColor = "#1ED760";
        })
        gridLinesButton.addEventListener("mouseleave", () => {
            gridLinesButton.style.backgroundColor = "#1ED760";
        });
    } else {
        // Grid Lines Off
        gridItem.forEach(item => {
            item.style.border = "solid rgba(140, 135, 135, 0.83) 0.01px";
        });
        toggledGrid = true;
        gridLinesButton.style.backgroundColor = "#535353";
        gridLinesButton.style.color = "#1ED760";
        gridLinesButton.addEventListener("mouseenter", () => {
            gridLinesButton.style.backgroundColor = "#656262"
        })
        gridLinesButton.addEventListener("mouseleave", () => {
            gridLinesButton.style.backgroundColor = "#535353";
        });
    }
});

if (toggledGrid === false) {
    console.log("falsed")
    gridLinesButton.style.backgroundColor = "red";
}

//Set Value of Grid
const slider = document.querySelector(".slider")

let sliderValue = slider.value;
let gridSize = sliderValue ** 2;


const gridContainer = document.querySelector(".grid-container");

function setGrid(gridSize, sliderValue) {
    for (i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.className = "grid-item";
        div.style.flexBasis = `calc(${100 / sliderValue}%)`;
        div.style.height = `calc(${100 / sliderValue}%)`;
        gridContainer.appendChild(div);
        if (toggledGrid === false) {
            div.style.border = "none";
        }
    }
};


slider.addEventListener("input", () => {
    sliderValue = slider.value;
    gridSize = sliderValue ** 2;
    gridContainer.innerHTML = '';
    setGrid(gridSize, sliderValue);
    gridItem = document.querySelectorAll(".grid-item")
    draw(gridItem);
})


setGrid(gridSize, sliderValue);
let gridItem = document.querySelectorAll('.grid-item');
// Draw Feature
let isMouseDown = false;

document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

function draw(gridItem) {
    gridItem.forEach(item => {
        item.addEventListener("mouseenter", function() {
            if (isMouseDown) {
                this.classList.add("black-background");
            }
        });
    });
};

draw(gridItem);
// Clear Button
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    gridItem.forEach(item => {
        item.classList.remove("black-background");
    })
})

