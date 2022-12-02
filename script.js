let log = console.log;

const gridContainer = document.querySelector("#gridContainer");
log(gridContainer);

for (let row = 0; row < 16; row++) {
  let rowContainer = document.createElement("div");
  rowContainer.className = "rowContainer";
  rowContainer.style.height = "calc(100vh / 16)";
  for (let col = 0; col < 16; col++) {
    let squareDiv = document.createElement("div");
    squareDiv.textContent = `${row},${col}`;
    squareDiv.className = "squareDiv";
    squareDiv.style.width = "calc(100vw/16)";
    rowContainer.appendChild(squareDiv);
  }
  gridContainer.appendChild(rowContainer);
}
