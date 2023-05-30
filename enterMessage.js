/* $(function () {
    $("#navbar").load("navbar.html");

    const portalMessage = localStorage.getItem("portalMessage");
    if (portalMessage) {
        document.getElementById("message").value = portalMessage;
    }

    document
        .getElementById("messageForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            const message = document.getElementById("message").value;
            localStorage.setItem("portalMessage", message);
            window.location.href = "index.html";
        });
}); */

$(function () {
    $("#navbar").load("navbar.html");

    // Check if a message exists in the database
    $.ajax({
        url: "getMessage.php", // Replace with the actual endpoint to fetch the message
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
            url: "updateMessage.php", // Replace with the actual endpoint to update the message
            method: "POST",
            data: { message: message },
            success: function (response) {
                console.log("Message updated successfully!");
            },
            error: function (xhr, status, error) {
                console.log("Error updating message:", error);
            },
        });
    });
});
