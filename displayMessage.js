$(function () {
    // This code is wrapped inside $(function() {}) to ensure it runs when the document is ready

    // Retrieve the portalMessage from localStorage
    const portalMessage = localStorage.getItem("portalMessage");

    // Check if portalMessage exists
    if (portalMessage) {
        // Replace newline characters with <br> tags
        const formattedMessage = portalMessage.replace(/\n/g, "<br>");

        // Set the formattedMessage as the HTML content of the #portalMessage element
        $("#portalMessage").html(formattedMessage);
    }
});
