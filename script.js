let log = console.log;

const gridContainer = document.querySelector("#gridContainer");

let numSquares = 16;
const numSquaresBtn = document.querySelector("#numSquaresBtn");
numSquaresBtn.addEventListener("click", () => {
  numSquares = prompt("How many squares per side? (max is 100 squares) ", 32);
  if (numSquares > 100) numSquares = 100;
  gridContainer.innerHTML = "";
  drawGrid(numSquares);
});

function pixelateDiv(e) {
  e.target.style.background = "#666";
}

function drawGrid(numSquares) {
  for (let row = 0; row < numSquares; row++) {
    let rowContainer = document.createElement("div");
    rowContainer.className = "rowContainer";
    rowContainer.style.height = `calc(86vh/${numSquares})`;
    for (let col = 0; col < numSquares; col++) {
      let squareDiv = document.createElement("div");
      squareDiv.className = "squareDiv";
      squareDiv.style.width = `calc(95vw/${numSquares})`;
      squareDiv.style.border = `${32 / numSquares}px solid #dedede`;
      rowContainer.appendChild(squareDiv);
      squareDiv.addEventListener("mouseenter", pixelateDiv);
    }
    gridContainer.appendChild(rowContainer);
  }
}

drawGrid(numSquares);

// allSquareDivs = document.querySelectorAll(".squareDiv");
// allSquareDivs.forEach((squareDiv) =>
//   squareDiv.addEventListener("mouseenter", pixelateDiv)
// );
