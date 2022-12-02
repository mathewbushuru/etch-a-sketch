let log = console.log;

const gridContainer = document.querySelector("#gridContainer");
log(gridContainer);

for (let row = 0; row < 16; row++) {
  let rowContainer = document.createElement("div");
  rowContainer.className = "rowContainer";
  for (let col = 0; col < 16; col++) {
    let squareDiv = document.createElement("div");
    squareDiv.textContent = `${row},${col}`;
    squareDiv.className = "squareDiv";
    rowContainer.appendChild(squareDiv);
  }
  gridContainer.appendChild(rowContainer);
}
