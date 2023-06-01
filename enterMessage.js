$(function () {
    $("#navbar").load("navbar.html");

    // Check if a message exists in the database
    $.ajax({
        url: "http://192.168.4.33:3000/api/getMessage",
        method: "GET",
        success: function (response) {
            var message = response.message;

            // Set the message in the textarea if it exists
            if (message) {
                $("#message").val(message);
            }
        },
        error: function (xhr, status, error) {
            console.log("Error fetching message:", error);
        },
    });

    $("#messageForm").submit(function (event) {
        event.preventDefault();

        var message = $("#message").val();

        // Send an AJAX request to update the message in the database
        $.ajax({
            url: "http://192.168.4.33:3000/api/updateMessage",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ message: message }),
            success: function (response) {
                console.log("Message updated successfully!");
            },
            error: function (xhr, status, error) {
                console.log("Error updating message:", error);
            },
        });
    });
});
