let gridContainer = document.querySelector(".gridContainer");
let reset = document.querySelector("#reset");

// button to reset the grid and change the number of squares
reset.addEventListener("click", () => {
    let gridNumber = prompt("Please enter the number of grids per side", "16");
    gridNumber = parseInt(gridNumber);
    
    while(isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100) {
        gridNumber = prompt("Please enter a number between 1 and 100", "16");
        gridNumber = parseInt(gridNumber);
    }

    // clear previous grid
    while(gridContainer.children.length > 0) {
        gridContainer.lastChild.remove();
    }

    createGrid(gridNumber);
});

// draws a grid of squares based on the gridNumber input
function createGrid(gridNumber) {
    // grid container remains the same, squares adjust in size to fit
    let size = 256;
    let gridPixels = size / gridNumber + "px";

    for(let y = 0; y < gridNumber; y++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = "row" + y;

        for(let i = 0; i < gridNumber; i++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            grid.id = "grid" + i;
            grid.style.width = gridPixels;
            grid.style.height = gridPixels;
        
            row.appendChild(grid);
        }

        gridContainer.appendChild(row);
    }

    // create etch-a-sketch effect
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "red";
        });
    });
}

createGrid(16);