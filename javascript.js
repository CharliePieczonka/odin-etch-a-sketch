let gridContainer = document.querySelector(".gridContainer");

// create a 16 x 16 grid of divs
for(let y = 0; y < 16; y++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.id = "row" + y;

    for(let i = 0; i < 16; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.id = "grid" + i;
        //grid.textContent = i;
    
        row.appendChild(grid);
    }

    gridContainer.appendChild(row);
}

let grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "red";
    });
});




