$(document).ready(function() {
  let color = "green";
  $(".column").click(function() {
    $(this).prepend(`<div class="piece ${color}"></div>`);
    if (color === "blue") {
      color = "green";
    } else {
      color = "blue";
    }
  });
});
