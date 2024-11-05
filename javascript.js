let gridContainer = document.querySelector(".gridContainer");
let clear = document.querySelector("#clear");
let resize = document.querySelector("#resize");

// button to clear the grid but keep it the number of cells
clear.addEventListener("click", ()=> {
    // get number of squares per row of current grid
    let row = document.querySelector("#row0");
    let numSquares = row.children.length;
    
    clearGrid();
    createGrid(numSquares);
});

// button to change the number of squares in the grid
resize.addEventListener("click", () => {
    let numSquares = "";
    
    while(isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
        numSquares = prompt("Please enter the number of squares per side, between 1 and 100", "16");
        
        if(numSquares == null) {
            return;
        }

        numSquares = parseInt(numSquares);
    }

    clearGrid();
    createGrid(numSquares);
});

// draws a grid of squares based on the numSquares input
function createGrid(numSquares) {
    // grid container remains the same, squares adjust in size to fit
    let size = gridContainer.offsetWidth;
    let squarePixels = size / numSquares + "px";

    for(let y = 0; y < numSquares; y++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = "row" + y;

        for(let i = 0; i < numSquares; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = "square" + i;
            square.style.width = squarePixels;
            square.style.height = squarePixels;
        
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }

    // create etch-a-sketch effect
    let squares = document.querySelectorAll(".square");
    squares.forEach((squares) => {
        squares.addEventListener("mouseover", () => {
            squares.style.backgroundColor = "red";
        });
    });
}

// removes all squares from the grid
function clearGrid() {
    while(gridContainer.children.length > 0) {
        gridContainer.lastChild.remove();
    }
}

createGrid(16);