var gameMarker = "x";

function changeMarkerToX(ID) {
  var gameMarker = "X";
  console.log("The x button was clicked!");
}

function changeMarkerToO(ID) {
  var gameMarker = "O";
  console.log("The o button was clicked!");
}

var xTurn = true;
function placeMark(ID) {
  if (xTurn) {
    document.getElementById(ID).innerHTML = "x";
  } else {
    document.getElementById(ID).innerHTML = "o";
  }
  xTurn = !xTurn;
}
