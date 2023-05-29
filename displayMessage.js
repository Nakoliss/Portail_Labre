$(function () {
    // This code is wrapped inside $(function() {}) to ensure it runs when the document is ready

    // Retrieve the portalMessage from localStorage
    const portalMessage = localStorage.getItem("portalMessage");

    // Check if portalMessage exists
    if (portalMessage) {
        // Split the portalMessage into an array of paragraphs based on line breaks (\n)
        const paragraphs = portalMessage.split("\n");

        // Map over each paragraph and wrap it in <p> tags
        const formattedMessage = paragraphs
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join(""); // Join the formatted paragraphs into a single string

        // Set the formattedMessage as the HTML content of the #portalMessage element
        $("#portalMessage").html(formattedMessage);
    }
});
