var parentDiv = document.getElementById("div_container");

for (var i = 0; i < 16; i++) {
  var row = document.createElement("div");
  row.classList.add("grid-row");
  parentDiv.appendChild(row);

  for (var j = 0; j < 16; j++) {
    var cell = document.createElement("div");
    cell.classList.add("grid-cell");
    parentDiv.children[i].appendChild(cell);
  }
}

