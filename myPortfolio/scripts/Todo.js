$(function() {
  let $list = $("ul");
  let $newItemForm = $("myInput");

  $newItemForm.on("addBtn", function(e) {
    e.preventDefault();
    let text = $('text.input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('text.input[type="text"]').val("");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});

/* Geolocation functions */

var loc = document.getElementById("myLoc");

function myLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    loc.innerHTML = "Not available.";
  }
}
function showPosition(position) {
  loc.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    "<br> Latitude: " +
    position.coords.latitude +
    "<br>";
}
