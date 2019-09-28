var gameMarker = "x";

function changeMarkerToX() {
  var gameMarker = "x";
  console.log("The x button was clicked!");
}

function changeMarkerToO() {
  var gameMarker = "0";
  console.log("The o button was clicked!");
}

var xTurn = true;
function placeMarker(ID) {
  if (xTurn) {
    document.getElementById(ID).innerHTML = "x";
  } else {
    document.getElementById(ID).innerHTML = "o";
  }
  xTurn = !xTurn;
}
