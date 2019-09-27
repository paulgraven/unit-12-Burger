// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newdevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(function() {
      console.log("changed devoured to", newdevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburgers = {
      name: $("#ca")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburgers
    }).then(function() {
      console.log("created new burgers");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burgers").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burgers", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
