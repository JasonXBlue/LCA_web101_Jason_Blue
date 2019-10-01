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
