$(function () {
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
});
