document.addEventListener("DOMContentLoaded", function() {
  createBoard(32);
  console.log('Hi');

})
 
function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div")
    div.style.border = "1px solid black" 
    board.insertAdjacentElement("beforeend", div);
  }
}

