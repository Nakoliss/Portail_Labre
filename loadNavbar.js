let loggedIn = sessionStorage.getItem("isLoggedIn") === "true" || false;

console.log("loggedIn:", loggedIn); // Display the value of loggedIn in the console

$(function () {
    // Load the navbar content
    $("#navbar").load("navbar.html", function () {
        if (!loggedIn) {
            showLoginWindow();
        }

        $("#loginButton").click(function () {
            loggedIn = true;
            sessionStorage.setItem("isLoggedIn", "true"); // Store the loggedIn status in localStorage as a string
            console.log("loggedIn:", loggedIn); // Display the value of loggedIn in the console
            hideLoginWindow();
        });

        $("#logoutButton").click(function () {
            loggedIn = false;
            sessionStorage.setItem("isLoggedIn", "false"); // Set the loggedIn status to false in session storage
            showLoginWindow();
        });
    });
});

function showLoginWindow() {
    $("#loginWindowContainer").show();
}

function hideLoginWindow() {
    $("#loginWindowContainer").hide();
}
