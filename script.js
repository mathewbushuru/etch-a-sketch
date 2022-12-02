let log = console.log;

const gridContainer = document.querySelector("#gridContainer");

function pixelateDiv(e) {
    log(e.target);
    e.target.style.background="#666"
  }

for (let row = 0; row < 16; row++) {
  let rowContainer = document.createElement("div");
  rowContainer.className = "rowContainer";
  rowContainer.style.height = "calc(100vh / 16)";
  for (let col = 0; col < 16; col++) {
    let squareDiv = document.createElement("div");
    squareDiv.className = "squareDiv";
    squareDiv.style.width = "calc(100vw/16)";
    rowContainer.appendChild(squareDiv);
  }
  gridContainer.appendChild(rowContainer);
}

allSquareDivs = document.querySelectorAll(".squareDiv");
allSquareDivs.forEach((squareDiv) =>
  squareDiv.addEventListener("mouseenter", pixelateDiv)
);
