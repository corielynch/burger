$(function() {

    $(".submitBtn").on("click", function(event) {
        event.preventDefault();

      var newDevoured = {
        burger_name: $("#form").val().trim(),
        devoured: {devoured:false}
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newDevoured
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devoured").on("click", function(event) {

      //var id = $(this).data("id");
      var id = $(this).parent().attr('id');

      console.log("THIS IS ID " + id)
      var changeDevoured = $(this).data("devoured");

      var newDevouredState = {
      devoured: {devoured:true}
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", changeDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
    
});
  