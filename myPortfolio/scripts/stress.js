//initial number of candy corn
var num = 0;

var candy = document.getElementById("candy");

function candyClick() {
  num += 1;

  var numbers = document.getElementById("numbers");

  //upgrade level for printing
  var upgradeLevel = document.getElementById("upgradeLevel");

  numbers.innerHTML = num;
  //automatic Frankenstein upgrade to 2x
  if (num >= 30) {
    num += 2;
    upgradeLevel.innerHTML = "Frankenstein Level";
  }

  //automatic factory upgrade to 10x
  if (num >= 500) {
    num += 10;
    upgradeLevel.innerHTML = "Factory Level";
  }

  //automatic plant upgrade to 30x
  if (num >= 1000) {
    num += 30;
    upgradeLevel.innerHTML = "Plant Level";
  }

  //automatic super factory upgrade to 1000x
  if (num >= 100000) {
    num += 1000;
    upgradeLevel.innerHTML = "Super-Plant Level";
  }
}
