$(function () {
    $("#navbar").load("navbar.html", function () {
        const loggedIn = "N"; //

        if (loggedIn === "N") {
            showLoginWindow();
        }
    });

    $("#closeLoginWindow").click(function () {
        hideLoginWindow();
    });
});

function showLoginWindow() {
    $("#loginWindowContainer").show();
}

function hideLoginWindow() {
    $("#loginWindowContainer").hide();
}
