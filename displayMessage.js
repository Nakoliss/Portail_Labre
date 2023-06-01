$(function () {
    // This code is wrapped inside $(function() {}) to ensure it runs when the document is ready

    // Check if a message exists in the database
    $.ajax({
        url: "http://192.168.4.33:3000/api/getMessage",
        method: "GET",
        success: function (response) {
            var message = response.message;
            var owner = response.owner;

            // Set the message in the #portalMessage element if it exists
            if (message) {
                // Replace newline characters with <br> tags
                const formattedMessage = message.replace(/\n/g, "<br>");

                // Set the formattedMessage as the HTML content of the #portalMessage element
                $("#portalMessage").html(formattedMessage);

                // Set the owner in the #owner element if it exists
                if (owner) {
                    $("#owner").text(owner);
                }
            }
        },
        error: function (xhr, status, error) {
            console.log("Error fetching message:", error);
        },
    });
});
